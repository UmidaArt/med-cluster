import React from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';
import './Modal.css'
import axios from "axios";

const Modal = ({projects, setProjects, setOpenModal}) => {

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
        }
    }

    const formik = useFormik({
        initialValues:{
            img: '',
            title: '',
            dataStart: '',
            dataEnd: '',
            admin: '',
            manager: ''
        },
        validationSchema: Yup.object({
            img: Yup.string()
                .required('Required'),
            title: Yup.string()
                .min(3, 'Must be 3 characters more')
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            dataStart: Yup.string()
                .min(3, 'Must be 3 characters more')
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            dataEnd: Yup.string()
                .min(3, 'Must be 3 characters more')
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            admin: Yup.string()
                .min(2, 'Must be 2 characters more')
                .max(30, 'Must be 20 characters or less')
                .required('Required'),
            manager: Yup.string()
                .min(2, 'Must be 2 characters more')
                .max(30, 'Must be 20 characters or less')
                .required('Required'),
        }),
        onSubmit: async (values) => {
            const addProject = await axios.post('https://62b95a18ff109cd1dc900844.mockapi.io/projects', values)
            setProjects([...projects, addProject.data])
            setOpenModal(false)
        }
    })

    return (
        <div className="fixed justify-center flex w-full bg-white p-6 modal">
            <div className="close absolute right-9 top-7 cursor-pointer" onClick={()=> {
                setOpenModal(false)
            }}><i className='bx bx-x'></i></div>
            <form className="modalForm" onSubmit={formik.handleSubmit} onKeyPress={handleEnter}>
                <div className="mb-5">
                    <label
                        htmlFor="img"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Image
                    </label>
                    <input
                        type="text"
                        name="img"
                        id="img"
                        placeholder="загрузить картинку"
                        value={formik.values.img}
                        onChange={formik.handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    {formik.touched.img && formik.errors.img ? (
                        <div className="text-red-500">{formik.errors.img}</div>
                    ) : null}
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="title"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        заполнить заголовок
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="заполнить заголовок"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    {formik.touched.title && formik.errors.title ? (
                        <div className="text-red-500">{formik.errors.title}</div>
                    ) : null}
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="dataStart"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        дата начала
                    </label>
                    <input
                        type="date"
                        name="dataStart"
                        id="dataStart"
                        placeholder="дата начала"
                        value={formik.values.dataStart}
                        onChange={formik.handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    {formik.touched.dataStart && formik.errors.dataStart ? (
                        <div className="text-red-500">{formik.errors.dataStart}</div>
                    ) : null}
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="dataEnd"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        дата окончания
                    </label>
                    <input
                        type="date"
                        name="dataEnd"
                        id="dataEnd"
                        placeholder="дата окончания"
                        value={formik.values.dataEnd}
                        onChange={formik.handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    {/*{formik.touched.dataEnd && formik.errors.dataEnd ? (*/}
                    {/*    <div className="text-red-500">{formik.errors.dataEnd}</div>*/}
                    {/*) : null}*/}
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="admin"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        администратор
                    </label>
                    <input
                        type="text"
                        name="admin"
                        id="admin"
                        placeholder="администратор"
                        value={formik.values.admin}
                        onChange={formik.handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    {formik.touched.admin && formik.errors.admin ? (
                        <div className="text-red-500">{formik.errors.admin}</div>
                    ) : null}
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="manager"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        менеджер
                    </label>
                    <input
                        type="text"
                        name="manager"
                        id="manager"
                        placeholder="менеджер"
                        value={formik.values.manager}
                        onChange={formik.handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    {formik.touched.manager && formik.errors.manager ? (
                        <div className="text-red-500">{formik.errors.manager}</div>
                    ) : null}
                </div>
                <div>
                    <button type="submit"
                            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none mb-5"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Modal;