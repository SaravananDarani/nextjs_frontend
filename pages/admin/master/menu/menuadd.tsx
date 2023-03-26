import { FormFieldInterface } from '@/common/interface/FormFieldInterface';
import { GlobleImport } from '@/pages/globleImport';
import AllTabs from "../companyTabs/index"
const { FormInput,
    IndexServices, getServices, swal,
    useForm, validator, useRouter, adminLayout, MenuInput, nextBase64,
    useEffect, useState, Constants
} = GlobleImport;

let idIndex = 0;
const menuadd = () => {
    let company: any = '';
    if (typeof window !== 'undefined') {
        company = Constants.webid
    }
    const title = "Menu"
    const [states, setStates]: any = useState({});
    const router = useRouter();
    let ids: any = router.query["id"];
    let id = ids ? nextBase64.decode(ids) : "";
    let views: any = router.query["view"];
    let view = views ? nextBase64.decode(views) : "";
    let parents: any = router.query["parent"];
    let parent = parents ? nextBase64.decode(parents) : "";
    let inputs: Array<FormFieldInterface> = MenuInput;
    const submit = () => {
        view === "" || view === "3" ? handleAdd() :
            view === "2" ? handleUpdate() : "";
    };

    const handleAdd = () => {
        let dataJson = state
        const req = { data: dataJson, url: IndexServices.MasterServices.MenuUrl }
        getServices.addData(req).then((res: any) => {
            if (res.status === "success") {
                swal(res.message, { icon: "success" });
                router.push({
                    pathname: '/admin/master/menu',
                    query: { returnUrl: "Added successfully" }
                });
            } else {
                swal("Not added", { icon: "error" });
            }
        })
    }
    const handleUpdate = () => {
        let dataJson: any = state;
        dataJson.id = id
        const req = {
            data: dataJson,
            url: IndexServices.MasterServices.MenuUrl
        }
        getServices.updateData(req).then((res: any) => {
            if (res.status === "success") {
                swal(res.message, { icon: "success" });
                router.push({
                    pathname: '/admin/master/menu',
                    query: {}
                });

            } else {
                swal("Not added", { icon: "error" });
            }
        })
    };
    let initState = {}
    if (view === "" || view === "3") {
        initState = {
            webid: company,
            parentId: parent,
            menuName: "",
            menuPath: "",
            menuIcon: "",
        };
    } else {
        initState = states;
    }

    const { handleChange, handleSubmit, onBlur, state, errors }
        = useForm({ initState, callback: submit, validator, states });
    let isValidForm = Object.values(errors).filter((error) => typeof error !== "undefined").length === 0;


    useEffect(() => {
        async function fetch() {
            var req = {
                dataId: { id: id },
                url: `${IndexServices.MasterServices.MenuUrl}/getid`,
            }
            const response = await getServices.getIdData(req);
            const fetched = await response.data;
            setStates(fetched)
        }
        if (id && idIndex === 0) {
            fetch();
            idIndex = +1
        }
    }, [idIndex, id, states])


    return (
        <>
            <div className='content-box'>
                <h3> <b><u>  {title} {view === "" ? "Add" : view === "1" ? "View" : view === "2" ? "Edit" : view === "3" ? "Sub Menu" : ""}</u></b></h3>

                <div className='row'>
                    <div className='col-md-4'>
                        <form>
                            {inputs.map((input) => (
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    hidden={"false"}
                                    onChange={handleChange}
                                    defaultValue={state[input.name]}
                                    errors={errors}
                                    onBlur={onBlur}
                                />
                            ))}
                            <br></br>
                            <div className="text-end">
                                <button type="submit"
                                    hidden={view === "1" ? true : false}
                                    disabled={!isValidForm}
                                    onClick={handleSubmit}
                                    className="btn btn-primary">
                                    {view === "" ? "Add" : view === "1" ? "" : view === "2" ? "Edit" : view === "3" ? "Sub Menu" : ""}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default menuadd
menuadd.Layout = adminLayout