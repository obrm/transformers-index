import React from "react";

const NewEntry = () => {
  return (
    <div className="container entry-container mt-4">
      <form className="p-3">
        {/* row 1 */}
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="entryName">Entry Name</label>
            <input
              type="input"
              className="form-control"
              name="entryName"
              id="entryName"
              placeholder="Entry Name"
            />
          </div>
          <div className="form-group col-md-3 ml-5">
            <label>Who can view this entry?</label>
            <div className="form-group">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    defaultValue="true"
                  />
                  Everyone
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    defaultChecked="checked"
                    defaultValue="false"
                  />
                  Only Me
                </label>
              </div>
            </div>
          </div>
          <div className="form-group col-md-2">
            <div className="form-group">
              <label htmlFor="entryImgUpload">Main Picture</label>
              <input
                type="file"
                image-with-preview
                className="form-control-file"
                id="entryImgUpload"
                accept="image/*"
              />
            </div>
          </div>
        </div>
        {/* row 2 */}
        <div className="form-row">
          <div className="form-group col-md-3">
            <label htmlFor="altModeType1">Alt Mode Type (required)</label>
            <input
              type="input"
              className="form-control"
              name="altModeType1"
              id="altModeType1"
              placeholder="Alt Mode Type"
            />
            <small id="passwordHelp" className="form-text text-muted">
              All other alt modes are optional.
            </small>
          </div>
          <div className="form-group col-md-3 ml-2">
            <label htmlFor="altMode1">Alt Mode Image (required)</label>
            <input
              type="file"
              image-with-preview
              className="form-control-file"
              id="altMode1"
              accept="image/*"
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="altModeType2">2nd Alt Mode Type</label>
            <input
              type="input"
              className="form-control"
              name="altModeType2"
              id="altModeType2"
              placeholder="2nd Alt Mode Type"
            />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="altMode2">2nd Alt Mode Image</label>
            <input
              type="file"
              image-with-preview
              className="form-control-file"
              id="altMode2"
              accept="image/*"
            />
          </div>
        </div>
        {/* row 3 accordion */}
        <div className="accordion" id="accordionAddAlt">
          <div className="card no-border">
            <div
              className="card-header card-header-background"
              id="headingAddAlt"
            >
              <h2>
                <button
                  className="btn link-hover"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseAddAlt"
                  aria-expanded="true"
                  aria-controls="collapseAddAlt"
                >
                  <b>Add More Alt Modes</b>
                </button>
              </h2>
            </div>
            <div
              id="collapseAddAlt"
              className="collapse hide"
              aria-labelledby="headingAddAlt"
              data-parent="#accordionAddAlt"
            >
              <div className="card-body card-body-background">
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label htmlFor="altModeType3">3rd Alt Mode Type</label>
                    <input
                      type="input"
                      className="form-control input-border"
                      name="altModeType3"
                      id="altModeType3"
                      placeholder="3rd Alt Mode Type"
                    />
                  </div>
                  <div className="form-group col-md-3 ml-2">
                    <label htmlFor="altMode3">3rd Alt Mode Image</label>
                    <input
                      type="file"
                      image-with-preview
                      className="form-control-file"
                      id="altMode3"
                      accept="image/*"
                    />
                  </div>
                  <div className="vl" />
                  <div className="form-group col-md-3">
                    <label htmlFor="altModeType4">4th Alt Mode Type</label>
                    <input
                      type="input"
                      className="form-control input-border"
                      name="altModeType4"
                      id="altModeType4"
                      placeholder="4th Alt Mode Type"
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="altMode4">4th Alt Mode Image</label>
                    <input
                      type="file"
                      image-with-preview
                      className="form-control-file"
                      id="altMode4"
                      accept="image/*"
                    />
                  </div>
                </div>
                <hr />
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label htmlFor="altModeType5">5th Alt Mode Type</label>
                    <input
                      type="input"
                      className="form-control input-border"
                      name="altModeType5"
                      id="altModeType5"
                      placeholder="5th Alt Mode Type"
                    />
                  </div>
                  <div className="form-group col-md-3 ml-2">
                    <label htmlFor="altMode5">5th Alt Mode Image</label>
                    <input
                      type="file"
                      image-with-preview
                      className="form-control-file"
                      id="altMode5"
                      accept="image/*"
                    />
                  </div>
                  <div className="vl" />
                  <div className="form-group col-md-3">
                    <label htmlFor="altModeType6">6th Alt Mode Type</label>
                    <input
                      type="input"
                      className="form-control input-border"
                      name="altModeType6"
                      id="altModeType6"
                      placeholder="6th Alt Mode Type"
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="altMode6">6th Alt Mode Image</label>
                    <input
                      type="file"
                      image-with-preview
                      className="form-control-file"
                      id="altMode6"
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* row 4 */}
        <div className="form-row mt-4">
          <div className="form-group col">
            <label>Affiliation</label>
            <div className="form-group">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    defaultValue="true"
                  />
                  Autobot
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    defaultValue="true"
                  />
                  Decepticon
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* row 5 */}
        <div className="accordion" id="accordionExample">
          <div className="card card-borders">
            <div
              className="card-header card-header-background card-bottom-border"
              id="headingOne"
            >
              <h2 className="mb-0">
                <button
                  className="btn link-hover btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <b>Description and tags</b>
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body-background">
                <div className="form-group">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="font-weight-bold"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control input-border"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
                <label>Tags</label>
                <checkbox-list>
                  <div className="form-check">
                    <div className="form-row container">
                      <div className="col-lg-3 col-md-4 col-6">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="tag0"
                        />
                        <label className="form-check-label" htmlFor="tag0">
                          autobot
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="tag1"
                        />
                        <label className="form-check-label" htmlFor="tag1">
                          decepticon
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="tag2"
                        />
                        <label className="form-check-label" htmlFor="tag2">
                          truck
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="tag3"
                        />
                        <label className="form-check-label" htmlFor="tag3">
                          camero
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="tag4"
                        />
                        <label className="form-check-label" htmlFor="tag4">
                          van
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="tag5"
                        />
                        <label className="form-check-label" htmlFor="tag5">
                          Triple Changer
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="tag6"
                        />
                        <label className="form-check-label" htmlFor="tag6">
                          Transformers movies
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="tag7"
                        />
                        <label className="form-check-label" htmlFor="tag7">
                          G1
                        </label>
                      </div>
                    </div>
                  </div>
                </checkbox-list>
              </div>
            </div>
          </div>
          <div
            className="card card-borders"
            style={{ borderBottom: "solid 4px #122329" }}
          >
            <div
              className="card-header card-header-background card-bottom-border"
              id="headingTwo"
            >
              <h2 className="mb-0">
                <button
                  className="btn link-hover btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <b>Add custom tags</b>
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body-background">
                <div className="form-row" id="instructionForm">
                  <div className="form-group-mb-0 col-md-6">
                    <label htmlFor="seq">
                      <b>Tag Name</b>
                    </label>
                    <input
                      type="input"
                      className="form-control input-border"
                      id="seq"
                      ng-model="seq"
                      placeholder
                    />
                  </div>
                  <div className="form-group-mb-0 col-lg-2 col-md-6">
                    <label>&nbsp;</label>
                    <br />
                    <input
                      className="btn btn-dark mx-auto tag-button"
                      type="button"
                      defaultValue="Add Tag"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* row 6 */}
        <div className="form-row mt-5 mb-n3" ng-show="true">
          <div className="mx-auto">
            <input
              className="btn save-entry-button"
              type="button"
              defaultValue="Seve Entry"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewEntry;
