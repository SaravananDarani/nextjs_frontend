export interface FormFieldInterface {
    id: number,
    name: string,
    type: string,
    placeholder?: string,
    errorMessage: string,
    label: string,
    pattern?: string,
    required?: Boolean,
    layer?: string,
    disabled?: Boolean
    value?: string
}

export interface FormInterface {
    unit_of_measure: string,
    item_number: string,
    is_ocr_lineitem: number,
    po_item_id: string,
    is_ocr_po_lineitem_match: number
}

export interface UserInterface {
    id: number;
    user?: string;
    password?: string;
    email?: string,
    firstname?: string,
    lastname?: string
}
