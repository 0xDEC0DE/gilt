// Code generated by MockGen. DO NOT EDIT.
// Source: internal/exec.go

// Package exec is a generated GoMock package.
package exec

import (
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
)

// MockExecManager is a mock of ExecManager interface.
type MockExecManager struct {
	ctrl     *gomock.Controller
	recorder *MockExecManagerMockRecorder
}

// MockExecManagerMockRecorder is the mock recorder for MockExecManager.
type MockExecManagerMockRecorder struct {
	mock *MockExecManager
}

// NewMockExecManager creates a new mock instance.
func NewMockExecManager(ctrl *gomock.Controller) *MockExecManager {
	mock := &MockExecManager{ctrl: ctrl}
	mock.recorder = &MockExecManagerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockExecManager) EXPECT() *MockExecManagerMockRecorder {
	return m.recorder
}

// RunCmd mocks base method.
func (m *MockExecManager) RunCmd(name string, args []string) (string, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "RunCmd", name, args)
	ret0, _ := ret[0].(string)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// RunCmd indicates an expected call of RunCmd.
func (mr *MockExecManagerMockRecorder) RunCmd(name, args interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "RunCmd", reflect.TypeOf((*MockExecManager)(nil).RunCmd), name, args)
}

// RunCmdInDir mocks base method.
func (m *MockExecManager) RunCmdInDir(name string, args []string, cwd string) (string, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "RunCmdInDir", name, args, cwd)
	ret0, _ := ret[0].(string)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// RunCmdInDir indicates an expected call of RunCmdInDir.
func (mr *MockExecManagerMockRecorder) RunCmdInDir(name, args, cwd interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "RunCmdInDir", reflect.TypeOf((*MockExecManager)(nil).RunCmdInDir), name, args, cwd)
}

// RunInTempDir mocks base method.
// NOTE(nic): mockgen creates this mock wrong, and I'm not sure what to do
// about it.  If you've run `task mockgen`, and it removed this code, and now
// your tests are failing, put this code back.
func (m *MockExecManager) RunInTempDir(dir, pattern string, fn func(string) error) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "RunInTempDir", dir, pattern, fn)
	// BEGIN extra code that mockgen can't be bothered to generate
	if fn != nil {
		return fn("stub")
	}
	// END extra code that mockgen can't be bothered to generate
	ret0, _ := ret[0].(error)
	return ret0
}

// RunInTempDir indicates an expected call of RunInTempDir.
func (mr *MockExecManagerMockRecorder) RunInTempDir(dir, pattern, fn interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "RunInTempDir", reflect.TypeOf((*MockExecManager)(nil).RunInTempDir), dir, pattern, fn)
}
