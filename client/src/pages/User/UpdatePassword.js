import React from 'react'

const UpdatePassword = () => {
    return (
        <>
            <div className='bg-dark bg-opacity-10'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="card p-4" style={{ backgroundColor: "#F4F4F4" }}>
                                <h4>Change Password</h4>
                                <hr />
                                <form>
                                    <div className="form-group mb-3">
                                        <label htmlFor="currentPassword">Current Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="currentPassword"
                                            placeholder="Enter current password"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="newPassword">New Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="newPassword"
                                            placeholder="Enter new password"
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="confirmNewPassword">Confirm New Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmNewPassword"
                                            placeholder="Confirm new password"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Save Changes
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UpdatePassword