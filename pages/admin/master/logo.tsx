import React from 'react'
import { FormFieldInterface } from '@/common/interface/FormFieldInterface';
import { GlobleImport } from '@/pages/globleImport';

const { FormInput,
    IndexServices, getServices, swal,
    useForm, validator, useRouter, adminLayout, LogoInput, nextBase64,
    useEffect, useState, Constants
} = GlobleImport;

let idIndex = 0;
const logo = (props: any) => {
    const [states, setStates]: any = useState({ name: "" });
    const [file, setFile]: any = useState("");
    const [path, setPath]: any = useState("");
    const router = useRouter();

    let id = props.id;
    let views: any = router.query["view"];
    let view = views ? nextBase64.decode(views) : "";
    let inputs: Array<FormFieldInterface> = LogoInput;
    useEffect(() => {
        async function fetchEmployees() {
            var req = {
                dataId: { id: id ? id : Constants.webid },
                url: `${IndexServices.MasterServices.MasterUrl}/logo`,
            }
            const response = await getServices.getIdData(req);
            const fetched = await response.data;
            setStates(fetched)
            const files = fetched.logo;
            const paths = Constants.imgPath;
            let http = `${paths}${files}`;
            setFile(files)
            setPath(http)
        }
        fetchEmployees();
    }, []);

    const submit = () => {
        handleUpdate()
    };

    const handleUpdate = () => {
        let dataJson: any = {
            id: Constants.webid,
            name: file
        };

        const req = {
            data: dataJson,
            url: `${IndexServices.MasterServices.MasterUrl}/logo`
        }
        getServices.updateData(req).then((res: any) => {
            if (res.status === "success") {
                swal(res.message, { icon: "success" });

            } else {
                swal("Not added", { icon: "error" });
            }
        })
    };
    let initState = {}
    if (view === "") {
        initState = {
            name: ""
        };
    } else {
        initState = states
    }

    const { onBlur, state, errors }
        = useForm({ initState, validator, states });
    let isValidForm = Object.values(errors).filter((error) => typeof error !== "undefined").length === 0;

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
            });
        }
        fetchEmployees();

    }

    return (
        <div className=' content-box'>
            <div className='row'>
                <b> Logo </b>

                <div className='col-md-4'>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            hidden={"false"}
                            onChange={onChangeHandler}
                            defaultValue={state[input.name]}
                            errors={errors}
                            onBlur={onBlur}
                        />
                    ))}
                    <br></br>
                    <div className="text-end">
                        <button type="submit"
                            hidden={false}
                            disabled={!isValidForm}
                            onClick={submit}
                            className="btn btn-primary">
                            Upload
                        </button>
                    </div>
                    <br></br>
                </div>
                <br></br>
                <div className='col-md-5 text-center'>
                    <img src={path} />
                </div>
            </div>
        </div>
    )
}

export default logo
logo.Layout = adminLayout


