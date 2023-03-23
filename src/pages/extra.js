import React from 'react'

export default function extra() {
  return (
    <div>

    <div className="col-sm-3 py-2 mx-4 my-1">
                    <div className="">
                      <strong className="text-black">{e.title}</strong>
                      <p className="text-black">Updated: Feb 24, 2023</p>
                      <div>
                        <strong className="text-black">INFO</strong>
                        <br />
                        <strong className="fa fa-tag text-black fw-bold">
                          {" "}
                          &nbsp; Price
                        </strong>
                        <br />
                        <span>{e.price}</span>
                        <br />
                        <strong className="fa fa-list-alt text-black fw-bold">
                          {" "}
                          &nbsp; Category
                        </strong>
                        <br />
                        <span>Arcade</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3 py-5 mx-1">
                  <br />
    
    <br />
<br/>
    <strong className="fa fa-tree text-black fw-bold">
      {" "}
      Compatible with
    </strong>
    <br />
    <span>{e.compatible}</span>
    <br />
    <strong className="fa fa-mobile text-black fw-bold">
      {" "}
      &nbsp; Developer
    </strong>
    <br />
    <strong>{e.developerName}</strong>
                  </div>

                  <div className="col-sm-2 py-3 px-0">
                  <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        className=" text-white"
        component="legend"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>

    <br />
    
    <br />
<br/>
    <strong className=" py-2 fa fa-arrows-v text-black fw-bold">
      {" "}
      &nbsp; Size
    </strong>
    <br />
    <span>{e.size}</span>
    <br />
    <strong className="fa fa-play text-black fw-bold">
      Google Play
    </strong>
    <br />
    <strong>{e.playStoreLink } </strong>
                  </div>
    </div>
  )
}
