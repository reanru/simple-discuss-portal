"use client"

import React from 'react'

export default function LoginPage() {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleLogin = (e: any) => {
        e.preventDefault();

        fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                email: e.currentTarget.email.value,
                password: e.currentTarget.password.value
            })
        })
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <input className="border" type="email" name="email" />
                <input className="border" type="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
