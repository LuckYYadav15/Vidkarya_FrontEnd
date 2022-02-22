const  samplepdfs = [
  {
    id:1,
    subject:"math",
    name:"math sem-1",
    file:"",
  },
  {
    id:1,
    subject:"Computer Archetecture",
    name:"C.A. sem-1",
    file:"",
  },
  {
    id:1,
    subject:"Design Anylysis and algorithems",
    name:"DAA sem-3",
    file:"",
  },
  {
    id:1,
    subject:"Object Oriented Proggramming",
    name:"OOP sem-2",
    file:"",
  }
];


 /*<td>
                      {" "}
                      <a
                        href="https://meet.google.com/syv-gket-gno"
                        target="blank"
                      >
                        MA201(B)
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://meet.google.com/qfw-wbgu-iyn"
                        target="blank"
                      >
                        CS201(A){" "}
                      </a>
                      /{" "}
                      <a
                        href="https://meet.google.com/yqv-jbnz-ebt"
                        target="blank"
                      >
                        CS201(B)
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://meet.google.com/hdj-neib-qju"
                        target="blank"
                      >
                        ISP
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://meet.google.com/snn-dzxf-ngd"
                        target="blank"
                      >
                        CS202
                      </a>
                    </td>
                    <td>LUNCH</td>
                    <td>
                      <a
                        href="https://meet.google.com/mjc-masg-rqy"
                        target="blank"
                      >
                        CS208(Lab)
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://meet.google.com/mjc-masg-rqy"
                        target="blank"
                      >
                        CS208(Lab)
                      </a>
                    </td>*/
export default samplepdfs;

/*<>
<section>
  <div class="box container auth-box">
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="container-box mx-auto ">
      <div class="container-fluid">
        <img
          src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"
          alt=""
          width="65"
          class="web-icon d-inline-block align-text-top"
        />
        <a class="heading navbar-brand ms-1" id="brandtext" href="">
          <div id="brand-name" href="#first-page">
            <p>Vidkarya</p>
          </div>
          <div>
            <h6 id="slogan1">Education with Excellence </h6>
          </div>
        </a>
      </div>
      <div class="form login">
        <div class="heading-login">
          <button class="btn-lgn mx-2 p-1 px-3" onClick={() => setisLogin(true)}>
            <h6>Log-in</h6>
          </button>
          <button class="btn-snp mx-2 p-1 px-3" onClick={() => setisLogin(false)}>
            <h6>Sign-up</h6>
          </button>
        </div>

        {isLogin ? (
          <div className="login row">
            <div class="inputBox">
              <input
                type="text"
                placeholder="Email"
                name="email"
                
                value={userLoginInfo.email}
                onChange={handleLoginChange}
              />
            </div>
            <div class="inputBox">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={userLoginInfo.password}
                onChange={handleLoginChange}
              />
            </div>
            <div class="inputBox m-0">
              <button onClick={postLoginData} className="py-1 px-5 mt-2">Login</button>
            </div>
            <div class="button input-group mb-3">
              <button type="button" class="btn-login ">
                <img
                  src="./images/Google__G__Logo.svg.png"
                  class="d-inline-block"
                  width="30"
                  height="30"
                />
                &nbsp &nbsp &nbsp &nbsp Google
              </button>
            </div>
          </div>
        ) : (
          <div id="signup" className="row">
          <div class="inputBox">
              <input
                type="text"
                placeholder="user name"
                name="userName"
                value={userSignupInfo.userName}
                onChange={handleSignupChange}
              />
            </div>
            <div class="inputBox">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={userSignupInfo.email}
                onChange={handleSignupChange}
              />
            </div>
            <div class="inputBox">
              <input
                type="password"
                value={userSignupInfo.password}
                placeholder="Password"
                name="password"
                onChange={handleSignupChange}
              />
            </div>
            <div class="inputBox">
              <input
                type="password"
                value={userSignupInfo.confirmPassword}
                placeholder="Confirm password"
                name="confirmPassword"
                onChange={handleSignupChange}
              />
            </div>
            <div class="inputBox m-0">
              <button onClick={postSignupData} className="px-5 py-1 ">Signup</button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  </section>
  <ToastContainer  position="top-center" />
</>*/