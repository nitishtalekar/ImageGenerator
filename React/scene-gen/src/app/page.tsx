// pages/index.tsx

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="d-flex align-items-stretch">
        <nav id="sidebar">
          {/* Sidebar Header */}
          <div className="sidebar-header d-flex align-items-center p-4">
            <div className="title">
              <h1 className="h5 mb-1">Profile Name</h1>
              <p className="text-sm text-gray-700 mb-0 lh-1">Designer</p>
            </div>
          </div>
          <span className="text-uppercase text-gray-600 text-xs mx-3 px-2 heading mb-2">Main</span>
          <hr className="bg-light border-light mx-4"/>
          <ul className="list-unstyled">
            <li className="sidebar-item">
              <a className="sidebar-link py-2" href="index.html">
                {/* <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                  <use xlinkHref="#real-estate-1"></use>
                </svg> */}
                <span>Dashboard</span>
              </a>
              <hr className="mx-4"/>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link py-2" href="tables.html">
                {/* <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                  <use xlinkHref="#portfolio-grid-1"></use>
                </svg> */}
                <span><b>Generate</b></span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="page-content form-page">
          {/* Page Header */}
          <div className="bg-dash-dark-2 py-4">
            <div className="container-fluid">
              <h2 className="h5 mb-0">Generate</h2>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="container-fluid py-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 py-3 px-0">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Generate</li>
              </ol>
            </nav>
          </div>

          {/* Forms Section */}
          <section className="pt-0">
            <div className="container-fluid">
              <div className="row gy-4">
                {/* Basic Form */}
                <div className="col-lg-12 col-12">
                  <GenerateForm />
                </div>

                {/* Horizontal Form */}
                {/* <div className="col-lg-6">
                  <HorizontalForm />
                </div> */}

                {/* Inline Form */}
                {/* <div className="col-lg-8">
                  <InlineForm />
                </div> */}

                {/* Modal Form */}
                {/* <div className="col-lg-4">
                  <ModalForm />
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    
  );
};

function GenerateForm() {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="h4 mb-0">Generate Assets</h3>
      </div>
      <div className="card-body pt-0">
        <p className="text-sm">Select base for assets</p>
        <form>
          <div className="row">
            <div className="mb-3 col-6">
              <label className="form-label" htmlFor="location_input">
                Location
              </label>
              <input
                className="form-control"
                id="location_input"
                type="text"
                placeholder="Enter Location"
              />
            </div>
            <div className="mb-3 col-6">
              <label className="form-label" htmlFor="location_input">
                Time Period
              </label>
              <input
                className="form-control"
                id="location_input"
                type="text"
                placeholder="Enter Time Period"
              />
            </div>
            <div className="mb-3 col-6">
              <label className="form-label" htmlFor="location_input">
                Setting
              </label>
              <select className="form-select" id="inlineFormSelectPref">
                <option selected disabled>Choose</option>
                <option value="1">Fantasy</option>
                <option value="2">Realistic</option>
              </select>
            </div>
            <div className="mb-3 col-6">
              <label className="form-label" htmlFor="location_input">
                Style
              </label>
              <select className="form-select" id="inlineFormSelectPref">
                <option selected disabled>Choose</option>
                <option value="1">Style 1</option>
                <option value="2">Style 2</option>
                <option value="3">Style 3</option>
              </select>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Generate
          </button>
        </form>
        <div className='row mt-3'>
          <div className='col-4'>
            <div className='card border border-dark d-flex align-items-center justify-content-center py-5'>
              Image
            </div>
            <div className='row d-flex justify-content-center mt-2'>
              <input className="form-check-input" id="defaultCheck0" type="checkbox" />
            </div>
          </div>
          <div className='col-4'>
            <div className='card border border-dark d-flex align-items-center justify-content-center py-5'>
              Image
            </div>
            <div className='row d-flex justify-content-center mt-2'>
              <input className="form-check-input" id="defaultCheck0" type="checkbox" />
            </div>
          </div>
          <div className='col-4'>
            <div className='card border border-dark d-flex align-items-center justify-content-center py-5'>
              Image
            </div>
            <div className='row d-flex justify-content-center mt-2'>
              <input className="form-check-input" id="defaultCheck0" type="checkbox" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BasicForm() {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="h4 mb-0">Basic Form</h3>
      </div>
      <div className="card-body pt-0">
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="exampleInputEmail1">
              Email address
            </label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              type="email"
              aria-describedby="emailHelp"
            />
            <div className="form-text" id="emailHelp">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="exampleInputPassword1">
              Password
            </label>
            <input
              className="form-control"
              id="exampleInputPassword1"
              type="password"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function HorizontalForm() {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="h4 mb-0">Horizontal Form</h3>
      </div>
      <div className="card-body pt-0">
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
        <form className="form-horizontal">
          <div className="row gy-2 mb-4">
            <label
              className="col-sm-3 form-label"
              htmlFor="inputHorizontalElOne"
            >
              Email
            </label>
            <div className="col-sm-9">
              <input
                className="form-control"
                id="inputHorizontalElOne"
                type="email"
                placeholder="Email Address"
              />
              <small className="form-text">
                Example help text that remains unchanged.
              </small>
            </div>
          </div>
          <div className="row gy-2 mb-4">
            <label
              className="col-sm-3 form-label"
              htmlFor="inputHorizontalElTwo"
            >
              Password
            </label>
            <div className="col-sm-9">
              <input
                className="form-control"
                id="inputHorizontalElTwo"
                type="password"
                placeholder="Password"
              />
              <small className="form-text">
                Example help text that remains unchanged.
              </small>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9 ms-auto">
              <button className="btn btn-primary" type="submit">
                Signin
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function InlineForm() {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="h4 mb-0">Inline Form</h3>
      </div>
      <div className="card-body pt-0">
        <form className="row g-3 align-items-center">
          <div className="col-lg">
            <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">
              Username
            </label>
            <div className="input-group">
              <div className="input-group-text">@</div>
              <input
                className="form-control"
                id="inlineFormInputGroupUsername"
                type="text"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="col-lg">
            <label className="visually-hidden" htmlFor="inlineFormSelectPref">
              Preference
            </label>
            <select className="form-select" id="inlineFormSelectPref">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-lg">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ModalForm() {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="mb-0">Signin Modal</h3>
      </div>
      <div className="card-body pt-0 text-center">
        <button className="btn btn-primary">
          Form in simple modal
        </button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg py-3 bg-dash-dark-2 border-bottom border-dash-dark-1 z-index-10">
        {/* Search panel content here (omitted for brevity) */}
        <div className="container-fluid d-flex align-items-center justify-content-between py-1">
          <div className="navbar-header d-flex align-items-center">
              <a className="navbar-brand text-uppercase text-reset" href="index.html">
              <div className="brand-text brand-big">
                <strong className="text-primary">JABALI</strong><strong>AI</strong>
              </div>
              <div className="brand-text brand-sm">
                <strong className="text-primary">D</strong><strong>A</strong>
              </div>
            </a>
            {/* <button
              className="sidebar-toggle">
              <svg className="svg-icon svg-icon-sm svg-icon-heavy transform-none">
                <use xlinkHref="#arrow-left-1" />
              </svg>
            </button> */}
          </div>
          <ul className="list-inline mb-0">
            <li className="list-inline-item logout px-lg-2">
              <a className="nav-link text-sm text-reset px-1 px-lg-0" id="logout" href="login.html">
                <span className="d-none d-sm-inline-block">Logout </span>
                <svg className="svg-icon svg-icon-xs svg-icon-heavy">
                  <use xlinkHref="#disable-1" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Home;
