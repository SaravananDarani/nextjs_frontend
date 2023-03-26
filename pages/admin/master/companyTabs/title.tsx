import React from 'react'
import { FormFieldInterface } from '@/common/interface/FormFieldInterface';
import { GlobleImport } from '@/pages/globleImport';
const { FormInput,
    IndexServices, getServices, swal,
    useForm, validator, useRouter, adminLayout, HostInput, nextBase64,
    useEffect, useState
} = GlobleImport;

let idIndex = 0;
const title = (props: any) => {
    const [states, setStates]: any = useState({ name: "" });
    const router = useRouter();
    const componentTitle = "title"
    let id = props.id;
    let views: any = router.query["view"];
    let view = views ? nextBase64.decode(views) : "";
    let inputs: Array<FormFieldInterface> = HostInput;
    const submit = () => {
        handleUpdate()
    };

    const handleUpdate = () => {
        let dataJson: any = state;
        dataJson.id = id
        const req = {
            data: dataJson,
            url: `${IndexServices.MasterServices.MasterUrl}/${componentTitle}`
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
            name: "",
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
            url: `${IndexServices.MasterServices.MasterUrl}/${componentTitle}`,
        }
        const { data } = await getServices.getIdData(db);
        setStates(data)
    }
    useEffect(() => {
        if (id && idIndex === 0) {
            getPosts();
            idIndex = +1
        }
    }, [idIndex, id, states])

    return (
        <div>
            <p className='first-letter'> <b> {componentTitle} </b></p>

            <div className='col-md-12'>
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
                            hidden={false}
                            disabled={!isValidForm}
                            onClick={handleSubmit}
                            className="btn btn-primary">
                            Update
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default title