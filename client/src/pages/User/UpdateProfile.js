import React from 'react'

const UpdateProfile = () => {
    return (
        <>
            <div className='bg-dark bg-opacity-10'>
                <h4 className=' bg-dark text-white text-center'>Edit Profile</h4>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <form style={{ background: '#f2f2f2', padding: '20px' }}>
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Phone</label>
                                    <input type="text" class="form-control" id="phone" />
                                </div>
                                <div class="mb-3">
                                    <label for="address" class="form-label">Address</label>
                                    <input type="text" class="form-control" id="address" />
                                </div>
                                <div class="mb-3">
                                    <label for="userID" class="form-label">UserID</label>
                                    <input type="text" class="form-control" id="userID" />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default UpdateProfile