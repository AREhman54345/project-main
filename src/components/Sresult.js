import React, { useEffect, useState } from "react";
import logooo from "../Assets/logooo.jpeg";
import sec from "../Assets/sec.jpeg";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Bar from "../components/Bar";
import Footer from "../components/Footer";
import axios from "axios";
import { ImageUrl } from "../components/Imag";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sresult() {
    let loc= useLocation();
    const xyz = loc.state.special
    

    const [data,setdata] = useState([])
    const [page, setpage] = useState([])
    console.log(xyz)

    // const load = async () => {
    
    //     await axios.post(`ttps://apkserver.tech-east.com.pk/apk/searchTitle1/${page}`).then((gdata)=>{
    //         setdata(gdata.data.doc.listings)
    //     });
    //   };
    //   useEffect(() => {
    //     load();
    //   }, [page]);
let navigation = useNavigate()
    const Download = (_id) => {
      axios
        .get(`https://apknodeserver.leafsols.com/apk/getSingleProduct${_id}`)
        .then((getdata) => {
          console.log(getdata.data.doc);
          navigation("/Download", { state: { rehman: getdata.data.doc } });
        });
    };
  return (
    <div>
      <Bar />
      <div className="container my-5">
        <h2 className="">Searched Items</h2>
        <div className="progress w-100" style={{ height: "5px" }}>
          <div
            className="progress-bar bg-black"
            role="progressbar"
            style={{ width: "100%" }}
          />
        </div>

        <div className="row ">
          {xyz.map((e) => (
            <div className="col-sm-8 col-lg-4 p-5" onClick={() => Download(e._id)} style={{cursor:'pointer'}}>
              <div className="d-flex diva rounded">
                <div>
                  <img
                    src={ImageUrl + e.apkImages[0]}
                    alt="logo"
                    height="95"
                    width="95"
                    style={{ borderRadius: "20px", padding: "3px" }}
                  />
                </div>
                &nbsp; &nbsp;
                <div className="d-flex flex-column gap-1">
                  <strong>{e.title} <span style={{color:'red'}}>(New)</span></strong>
                  <span>Version: 1.19.63.01</span>
                  <span>Mod: God Mode</span>
                  <span>Downloads: 1000+</span>
                  <button
                    className="btn border border-success border-2 position-relative p-0 justify-content-center align-items-center d-flex"
                    style={{ height: "20px", width: "100px" }}
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="justify-content-center d-flex">
          <Stack spacing={2}>
            <Pagination
              count={4}
              color="warning"
              onChange={(e, value) => setpage(value)}
            />
          </Stack>
        </div>
      </div>
      <Footer />
    </div>
  );
}
