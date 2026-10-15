// src/users/pages/UserListPage.jsx

import { useState } from "react";
import { DataTable } from "@/shared";
import { UserColumns } from "../table/UserColumns";
import { users } from "../data/users";
import { Button } from "../../../shared";
import { Link } from "react-router-dom";
import  ReportConfigModal  from "../reports/components/ReportConfigModal"

export default function UserListPage() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);  //con esto defino que el estado es falso hasta que se inteeactyue con el boton(pordefecto)

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4 cursor-pointer">
        <h1 className="text-xl font-semibold">Listador de Usuarios</h1>

        <div className="flex gap-12">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setIsReportModalOpen(true)} //cuando se hace click al boton despliega la interfaz de reporte (estado true )
          >
            Reportar usuario
          </Button>

          <Link to="/dashboard/register">
            <Button size="sm" variant="secondary">
              Crear usuario
            </Button>
          </Link>
        </div>
      </div>

      <DataTable data={users} columns={UserColumns} />

      <ReportConfigModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />
    </div>
  );
}