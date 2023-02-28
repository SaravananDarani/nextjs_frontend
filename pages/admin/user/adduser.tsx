import { FormFieldInterface } from '@/common/interface/FormFieldInterface';
import { GlobleImport } from '@/pages/globleImport';
const { FormInput,
    IndexServices, getServices, swal,
    useForm, validator, useRouter, adminLayout, RegisterInput, nextBase64,
    useEffect, useState
} = GlobleImport;

let idIndex = 0;
const adduser = () => {
    const [states, setStates]: any = useState({});
    const router = useRouter();
    let ids: any = router.query["id"];
    let id = ids ? nextBase64.decode(ids) : "";
    let views: any = router.query["view"];
    let view = views ? nextBase64.decode(views) : "";
    let inputs: Array<FormFieldInterface> = RegisterInput;
    const submit = () => {
        view === "" ? handleAdd() :
            view === "2" ? handleUpdate() : "";
    };

    const handleAdd = () => {
        let dataJson = state
        const req = { data: dataJson, url: IndexServices.LoginServices.userUrl }
        getServices.addData(req).then((res: any) => {
            if (res.status === "success") {
                swal(res.message, { icon: "success" });
                router.push({
                    pathname: '/admin/user/',
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
            url: IndexServices.LoginServices.userUrl
        }
        getServices.updateData(req).then((res: any) => {
            if (res.status === "success") {
                swal(res.message, { icon: "success" });
                router.push({
                    pathname: '/admin/user/',
                    query: {}
                });

            } else {
                swal("Not added", { icon: "error" });
            }
        })
    };
    let initState = {}
    if (view === "") {
        initState = {
            email: "",
            firstname: "",
            lastname: "",
        };
    } else {
        initState = states
    }

    const { handleChange, handleSubmit, onBlur, state, errors }
        = useForm({ initState, callback: submit, validator, states });
    let isValidForm = Object.values(errors).filter((error) => typeof error !== "undefined").length === 0;
    const getPosts = async () => {
        var db = {
            dataId: { id: id },
            url: `${IndexServices.LoginServices.userUrl}/getid`,
        }
        const { data } = await getServices.getIdData(db);
        if (data) setStates(data)
    }
    useEffect(() => {

        if (id && idIndex === 0) {
            getPosts();
            idIndex = +1
        }
    }, [idIndex, id, states])


    return (
        <div className='content-box'>
            <h3> <b><u>  User {view === "" ? "Add" : view === "1" ? "View" : view === "2" ? "Edit" : ""}</u></b></h3>

            <div className='row'>
                <div className='col-md-4'>
                    <form>
                        {inputs.map((input) => (
                            <>
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    hidden={input.name === "password" && view !== "" ? "true" : "false"}
                                    onChange={handleChange}
                                    defaultValue={state[input.name]}
                                    errors={errors}
                                    onBlur={onBlur}
                                />
                            </>
                        ))}
                        <br></br>
                        <div className="text-end">
                            <button type="submit"
                                hidden={view === "1" ? true : false}
                                disabled={!isValidForm}
                                onClick={handleSubmit}
                                className="btn btn-primary"> {view === "" ? "Add" : view === "1" ? "" : view === "2" ? "Edit" : ""} </button>
                        </div>
                    </form>
                </div>
                <div className='col-md-8'>

                </div>
            </div>
        </div>
    )
}

export default adduser
adduser.Layout = adminLayout