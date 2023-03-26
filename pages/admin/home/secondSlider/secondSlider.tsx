import { FormFieldInterface } from '@/common/interface/FormFieldInterface';
import { GlobleImport } from '@/pages/globleImport';

const {
    FormInput, IndexServices, getServices, swal, Constants,
    useForm, validator, useRouter, adminLayout, SecondSliderInput, nextBase64, useEffect, useState
} = GlobleImport;

let idIndex = Constants.numZero;
const slider = () => {
    const title = "Second Slider";
    const [states, setStates]: any = useState({});
    const [file, setFile]: any = useState("");
    const [path, setPath]: any = useState("");
    const router = useRouter();
    let ids: any = router.query["id"];
    let id = ids ? nextBase64.decode(ids) : "";
    let views: any = router.query["view"];
    let view = views ? nextBase64.decode(views) : "";
    let inputs: Array<FormFieldInterface> = SecondSliderInput;
    let company: any = '';
    if (typeof window !== 'undefined') {
        company = Constants.webid
    }
    const { secondSliderUrl } = Constants.routerUrl;
    const { imgPath } = Constants;

    const submit = () => {
        view === Constants.isString ? handleAdd() :
            view === Constants.numCharTwo ? handleUpdate() : "";
    };

    const handleAdd = () => {
        let dataJson = state
        const req = { data: dataJson, url: IndexServices.MasterServices.SecondSliderUrl }
        getServices.addData(req).then((res: any) => {
            if (res.status === Constants.success) {
                swal(res.message, { icon: Constants.success });
                router.push({
                    pathname: secondSliderUrl,
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
            url: IndexServices.MasterServices.SecondSliderUrl
        }
        getServices.updateData(req).then((res: any) => {
            if (res.status === Constants.success) {
                swal(res.message, { icon: Constants.success });
                router.push({
                    pathname: secondSliderUrl,
                    query: {}
                });
            } else {
                swal("Not added", { icon: "error" });
            }
        })
    };
    let initState = {}
    if (view === Constants.isString) {
        initState = {
            img: "",
            name: "",
            title: "",
            subtitle: "",
            webid: company
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
            url: `${IndexServices.MasterServices.SecondSliderUrl}/getid`,
        }
        const { data } = await getServices.getIdData(db);
        setStates(data)
    }
    useEffect(() => {
        if (id && idIndex === Constants.numZero) {
            getPosts();
            idIndex = +1
        }
    }, [idIndex, id, states])


    return (
        <>
            <div className='content-box'>
                <h3> <b><u>  {title} {view === "" ? "Add" : view === "1" ? "View" : view === "2" ? "Edit" : ""}</u></b></h3>
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
                                    {view === "" ? "Add" : view === "1" ? "" : view === "2" ? "Edit" : ""}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-8'>
                        {states.sliderImg &&
                            <img src={`${imgPath}${states.sliderImg}`} className="card-customize " />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default slider
slider.Layout = adminLayout