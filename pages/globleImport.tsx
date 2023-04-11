import { useEffect, useState, useCallback } from "react";
import { useRouter } from 'next/router';
import { userHeadCell } from "@/common/utils/headCellsUtils";
import { IndexServices } from "@/services/config";
import { getServices } from "@/services/fetchdata";
import { validator } from "@/pages/auth/form/Validator";
import { Constants } from '@/common/constants/Constants';

import FormInput from '@/common/formInput';
import Copyright from "@/common/layout/copyright";
import Slide from "@/pages/auth/slider";
import Title from '@/common/layout/admin/title';
import adminLayout from '@/common/layout/adminLayout';
import shopsLayout from '@/common/layout/shopsLayout';
import useForm from "@/pages/auth/form/useForm";
import nextBase64 from 'next-base64';
import swal from 'sweetalert';
import Link from "next/link";
import Moment from 'moment';

import {
    Button, Card, CardHeader, CardBody, CardTitle,
    Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle,
    FormGroup, Form, Input, InputGroupText, InputGroup, Media, NavbarBrand, Navbar,
    NavItem, NavLink, Nav, Progress, Table, Container, Row, Col
} from "reactstrap";
import {
    LoginInput, RegisterInput, otpInput, ForgotInput, CompanyInput,
    HostInput, LogoInput, MenuInput, SliderInput, SecondSliderInput,
    ClientInput,
} from "@/common/utils/FormInputUtils";

export const GlobleImport = {
    useEffect, useState, FormInput, Copyright, Slide,
    LoginInput, RegisterInput, useRouter, otpInput, userHeadCell, Title, adminLayout, shopsLayout, IndexServices, Link,
    getServices, swal, useForm, nextBase64, validator, ForgotInput, CompanyInput, HostInput, LogoInput, useCallback, Moment,
    Button, Card, CardHeader, CardBody, CardTitle,
    Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle,
    FormGroup, Form, Input, InputGroupText, InputGroup, Media, NavbarBrand, Navbar,
    NavItem, NavLink, Nav, Progress, Table, Container, Row, Col, MenuInput, Constants, SliderInput, SecondSliderInput,
    ClientInput
};