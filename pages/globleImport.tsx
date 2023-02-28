import { useEffect, useState, useCallback } from "react";
import FormInput from '@/common/formInput';
import Copyright from "@/common/layout/Copyright";
import Slide from "./auth/slider";
import { LoginInput, RegisterInput, otpInput, ForgotInput, CompanyInput } from "@/common/utils/FormInputUtils";
import { useRouter } from 'next/router';
import { userHeadCell } from "@/common/utils/headCellsUtils";
import Title from '@/common/layout/admin/Title';
import adminLayout from '@/common/layout/adminLayout';
import useForm from "@/pages/auth/form/useForm";
import nextBase64 from 'next-base64';
import swal from 'sweetalert';
import { IndexServices } from "@/services/config";
import { getServices } from "@/services/fetchdata";
import { validator } from "@/pages/auth/form/Validator";
import Link from "next/link";
import Moment from 'moment';

import {
    Button, Card, CardHeader, CardBody, CardTitle,
    Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle,
    FormGroup, Form, Input, InputGroupText, InputGroup, Media, NavbarBrand, Navbar,
    NavItem, NavLink, Nav, Progress, Table, Container, Row, Col
} from "reactstrap";
export const GlobleImport = {
    useEffect, useState, FormInput, Copyright, Slide,
    LoginInput, RegisterInput, useRouter, otpInput, userHeadCell, Title, adminLayout, IndexServices, Link,
    getServices, swal, useForm, nextBase64, validator, ForgotInput, CompanyInput, useCallback, Moment,
    Button, Card, CardHeader, CardBody, CardTitle,
    Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle,
    FormGroup, Form, Input, InputGroupText, InputGroup, Media, NavbarBrand, Navbar,
    NavItem, NavLink, Nav, Progress, Table, Container, Row, Col
};