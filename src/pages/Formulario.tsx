import { useState } from "react"
import { useForm } from "react-hook-form";
import { MyModel } from "../models/myModel";

export default function Formulario() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (model: MyModel) => {
        alert(`submeteu nome: ${model.nome} | sobrenome: ${model.sobrenome}`);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-6">
                    <div className="mb-3">
                        <label htmlFor="nome" className={"form-label"}>Nome</label>
                        <input type="text" className={"form-control"} placeholder="Nome" {...register("nome")} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
                        <input type="text" className="form-control" placeholder="Sobrenome" {...register("sobrenome")} />
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
    )
}