import { FormFieldInterface } from '@/common/interface/FormFieldInterface';
import { GlobleImport } from '@/pages/globleImport';

const {
    FormInput, IndexServices, getServices, swal, Constants,
    useForm, validator, useRouter, adminLayout, SliderInput, nextBase64, useEffect, useState
} = GlobleImport;

let idIndex = Constants.numZero;
const slider = () => {
    const title = "Slider";
    const [states, setStates]: any = useState({});
    const [file, setFile]: any = useState("");
    const [path, setPath]: any = useState("");
    const router = useRouter();
    let ids: any = router.query["id"];
    let id = ids ? nextBase64.decode(ids) : "";
    let views: any = router.query["view"];
    let view = views ? nextBase64.decode(views) : "";
    let inputs: Array<FormFieldInterface> = SliderInput;
    let company: any = '';
    if (typeof window !== 'undefined') {
        company = Constants.webid
    }
    const { sliderUrl } = Constants.routerUrl;
    const { imgPath } = Constants;

    const submit = () => {
        view === Constants.isString ? handleAdd() :
            view === Constants.numCharTwo ? handleUpdate() : "";
    };

    const handleAdd = () => {
        let dataJson = state
        const req = { data: dataJson, url: IndexServices.MasterServices.SliderUrl }
        getServices.addData(req).then((res: any) => {
            if (res.status === Constants.success) {
                swal(res.message, { icon: Constants.success });
                router.push({
                    pathname: sliderUrl,
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
            url: IndexServices.MasterServices.SliderUrl
        }
        getServices.updateData(req).then((res: any) => {
            if (res.status === Constants.success) {
                swal(res.message, { icon: Constants.success });
                router.push({
                    pathname: sliderUrl,
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
    const onChangeHandler = (event: any) => {
        setStates({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
        let images: any[] = []
        for (var i = 0; i < event.target.files.length; i++) {
            images[i] = event.target.files.item(i);
        }
        images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
        let message = `${images.length} valid image(s) selected`
        setStates({ images, message })



        async function fetchEmployees() {
            images.map(async image => {
                const datas = new FormData();
                datas.append("image", image, image.name);
                datas.append("type", 'logo');
                var req = {
                    data: datas,
                    url: `${IndexServices.BasicServices.uploadUrl}`,
                }
                let response = await getServices.addData(req);
                const fetched = response.data;
                const files = response.data.filename;
                const paths = response.data.destination;
                let http = `http://localhost:3001/${paths}${files}`;
                setFile(files)
                setPath(http)
                let e = {
                    target: {
                        name: 'img',
                        value: files
                    }
                }
                handleChange(e);
            });
        }
        fetchEmployees();

    }
    const { handleChange, handleSubmit, onBlur, state, errors }
        = useForm({ initState, callback: submit, validator, states });
    let isValidForm = Object.values(errors).filter((error) => typeof error !== "undefined").length === 0;
    const getPosts = async () => {
        var db = {
            dataId: { id: id },
            url: `${IndexServices.MasterServices.SliderUrl}/getid`,
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
                                    onChange={input.type === "file" ? onChangeHandler : handleChange}
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