"use client"
import React from "react"
import AdminLayout from "./components/AdminLayout"

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold">
        Bienvenido al Panel de Administración
      </h1>
      <p>Aquí podrás gestionar pedidos, productos, categorías y promociones.</p>
    </AdminLayout>
  )
}

export default AdminDashboard
