import React from "react";

const Profile = () => {
  return (
    <div className="container entry-container">
      <div className="row m-4">
        <h1 className="entry-h1">My Profile</h1>
        <hr />
      </div>
      <div className="row ml-5 mb-5">
        <form className="ml-3 mb-5">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              className="form-control"
              placeholder="Username"
              defaultValue="Example username"
              id="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              defaultValue="my.mail@example.com"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              defaultValue="*******"
              placeholder="*******"
              id="exampleInputPassword1"
            />
            <small id="passwordHelp" className="form-text text-muted">
              The password must contain at least one number, small letters
              <br />
              and capital letters and should be at least 8 characters.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputRetypePassword1">
              Re-type Password
            </label>
            <input
              type="password"
              className="form-control"
              defaultValue="*******"
              placeholder="*******"
              id="exampleInputRetypePassword1"
            />
          </div>
          <div>My Tags</div>
          <div className="form-check form-check-inline mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              defaultValue="option1"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              truck
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              defaultValue="option2"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              van
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              defaultValue="option2"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              doctor
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              defaultValue="option2"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              autobot
            </label>
          </div>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                defaultValue="option2"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                ambulance
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                defaultValue="option2"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                decepticon
              </label>
            </div>
          </div>
          <div className="mt-4">
            <button type="submit" className="btn mx-auto save-entry-button">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm ml-2 delete-button"
            >
              Delet selected Tags
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
