// Copyright (c) 2023 John Dewey

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.

package git_test

import (
	"errors"
	"log/slog"
	"os"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/suite"

	"github.com/retr0h/go-gilt/internal"
	"github.com/retr0h/go-gilt/internal/exec"
	"github.com/retr0h/go-gilt/internal/git"
)

type GitManagerPublicTestSuite struct {
	suite.Suite

	ctrl     *gomock.Controller
	mockExec *exec.MockExecManager

	gitURL     string
	gitVersion string
	cloneDir   string
	dstDir     string

	gm internal.GitManager
}

func (suite *GitManagerPublicTestSuite) NewTestGitManager() internal.GitManager {
	return git.New(
		afero.NewMemMapFs(),
		false,
		suite.mockExec,
		slog.New(slog.NewTextHandler(os.Stdout, nil)),
	)
}

func (suite *GitManagerPublicTestSuite) SetupTest() {
	suite.ctrl = gomock.NewController(suite.T())
	suite.mockExec = exec.NewMockExecManager(suite.ctrl)
	defer suite.ctrl.Finish()

	suite.gitURL = "https://example.com/user/repo.git"
	suite.gitVersion = "abc123"
	suite.cloneDir = "/cloneDir"
	suite.dstDir = "/dstDir"

	suite.gm = suite.NewTestGitManager()
}

func (suite *GitManagerPublicTestSuite) TestCloneOk() {
	suite.mockExec.EXPECT().
		RunCmd("git", []string{"clone", suite.gitURL, suite.cloneDir}).
		Return(nil)

	err := suite.gm.Clone(suite.gitURL, suite.cloneDir)
	assert.NoError(suite.T(), err)
}

func (suite *GitManagerPublicTestSuite) TestCloneReturnsError() {
	errors := errors.New("tests error")
	suite.mockExec.EXPECT().RunCmd(gomock.Any(), gomock.Any()).Return(errors)

	err := suite.gm.Clone(suite.gitURL, suite.cloneDir)
	assert.Error(suite.T(), err)
}

func (suite *GitManagerPublicTestSuite) TestResetOk() {
	suite.mockExec.EXPECT().
		RunCmd("git", []string{"-C", suite.cloneDir, "reset", "--hard", suite.gitVersion})

	err := suite.gm.Reset(suite.cloneDir, suite.gitVersion)
	assert.NoError(suite.T(), err)
}

func (suite *GitManagerPublicTestSuite) TestResetReturnsError() {
	errors := errors.New("tests error")
	suite.mockExec.EXPECT().RunCmd(gomock.Any(), gomock.Any()).Return(errors)

	err := suite.gm.Reset(suite.cloneDir, suite.gitVersion)
	assert.Error(suite.T(), err)
}

func (suite *GitManagerPublicTestSuite) TestCheckoutIndexOk() {
	cmdArgs := []string{
		"-C",
		suite.cloneDir,
		"checkout-index",
		"--force",
		"--all",
		"--prefix",
		suite.dstDir + string(os.PathSeparator),
	}
	suite.mockExec.EXPECT().RunCmd("git", cmdArgs).Return(nil)

	err := suite.gm.CheckoutIndex(suite.dstDir, suite.cloneDir)
	assert.NoError(suite.T(), err)
}

func (suite *GitManagerPublicTestSuite) TestCheckoutIndexReturnsError() {
	errors := errors.New("tests error")
	suite.mockExec.EXPECT().RunCmd(gomock.Any(), gomock.Any()).Return(errors)

	err := suite.gm.CheckoutIndex(suite.dstDir, suite.cloneDir)
	assert.Error(suite.T(), err)
}

// In order for `go test` to run this suite, we need to create
// a normal test function and pass our suite to suite.Run.
func TestGitManagerPublicTestSuite(t *testing.T) {
	suite.Run(t, new(GitManagerPublicTestSuite))
}