import { GlobleImport } from '@/pages/globleImport';

const { useRouter, useEffect, IndexServices, getServices, useState, Link, nextBase64,
  DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Nav, Moment, adminLayout, Constants } = GlobleImport;

const company = (props: any) => {

  const title = "Second Slider";
  const [userData, setUserData] = useState([]);
  const router = useRouter();
  const { secondSliderAddUrl } = Constants.routerUrl;
  const { deleteConfirmMsg, dateFormate, droupDownList, imgPath } = Constants;

  const addNew = () => {
    router.push({ pathname: secondSliderAddUrl });
  }

  useEffect(() => {
    const req = { dataId: { id: Constants.webid }, url: IndexServices.MasterServices.SecondSliderUrl }
    getServices.getIdData(req).then((res: any) => {
      if (res.status === Constants.success) {
        const { data } = res;
        setUserData(data);
      }
    })
  }, []);

  const deletes = (e: any) => {
    var r = window.confirm(deleteConfirmMsg);
    if (r == true) {
      const req = {
        dataId: { id: e },
        data: {},
        url: IndexServices.MasterServices.SecondSliderUrl
      }
      getServices.deleteData(req).then((res: any) => {
        if (res.status === Constants.success) {
          const { data } = res;
        }
      })
    }
  }

  if (userData) {
    var commentNodes: any = userData.map((list: any, i: number) => {
      return (
        <tr key={i}
          style={{
            backgroundColor: Moment(list.createddate).format(dateFormate) === Moment(new Date()).format('DD/MM/YYYY') ? '#e0e0e0' : ''
          }}>
          <td scope="row"><b>{i + 1}</b></td>
          <td>{list.name}</td>
          <td>{list.title}</td>
          <td>{list.subtitle}</td>
          <td>{Moment(list.createddate).format(dateFormate)} </td>
          <td>
            <Nav className="listSub">
              <UncontrolledDropdown>
                <DropdownToggle>
                  <a> : </a>
                </DropdownToggle>
                <DropdownMenu right>
                  <Link className="nav-link black"
                    href={{
                      pathname: secondSliderAddUrl,
                      query: { id: nextBase64.encode(list.id), view: nextBase64.encode('1') },
                    }}><i className="bi bi-eye-fill"></i> {droupDownList.view} </Link>
                  <Link className="nav-link black"
                    href={{
                      pathname: secondSliderAddUrl,
                      query: { id: nextBase64.encode(list.id), view: nextBase64.encode('2') },
                    }}><i className="bi bi-pencil-fill"></i> {droupDownList.edit} </Link>
                  <DropdownItem onClick={() => deletes(list.id)}>
                    <span><i className="bi bi-trash-fill"></i> {droupDownList.delete} </span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </td>
        </tr >
      );
    });
  }

  return (
    <div className='content-box'>
      <div className='row'>
        <div className='col-md-6 text-left'>
          <p> <i className="bi bi-building-fill-gear"></i> {title} List</p>
        </div>
        <div className='col-md-6 text-end'>
          <button type="button" onClick={addNew} className="btn btn-brand btn-icon-sm  btn-primary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="bi bi-plus-lg"></i> Add New
          </button>
        </div>
      </div>
      <table className="table table-striped-table-bordered caption-top table-hover table-checkable" id="kt_table_1">
        <caption> <i className="bi bi-buildings"></i> List of {title}</caption>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Title</th>
            <th>Sub Title</th>
            <th>Created Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {commentNodes}
        </tbody>
      </table>
    </div>
  )
}

export default company
company.Layout = adminLayout
