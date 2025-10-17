"use client"
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type FormState = {
    firstName: string
    lastName: string
    email: string
    message: string
}

type Errors = Partial<Record<keyof FormState, string>>

const textareaClasses = "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive resize-vertical"

const ContactForm: React.FC = () => {
    const [form, setForm] = useState<FormState>({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    })

    const [errors, setErrors] = useState<Errors>({})
    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)

    const validate = (): Errors => {
        const e: Errors = {}
        if (!form.firstName.trim()) e.firstName = 'First name is required'
        if (!form.lastName.trim()) e.lastName = 'Last name is required'
        if (!form.email.trim()) e.email = 'Email is required'
        else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
        if (!form.message.trim()) e.message = 'Message is required'
        return e
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
        setErrors(prev => ({ ...prev, [name]: undefined }))
        setSuccess(false)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const eobj = validate()
        setErrors(eobj)
        if (Object.keys(eobj).length) return
        setSubmitting(true)

        setTimeout(() => {
            console.log('Contact form submitted', form)
            setSubmitting(false)
            setSuccess(true)
            setForm({ firstName: '', lastName: '', email: '', message: '' })
        }, 600)
    }

    return (
        <div className="w-full max-w-2xl">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex flex-col">
                        <span className="text-sm font-medium">First name</span>
                        <Input
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            className="mt-1"
                            placeholder="Your first name"
                            aria-invalid={!!errors.firstName}
                            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                        />
                        {errors.firstName && (
                            <span id="firstName-error" className="text-sm text-red-600 mt-1">
                                {errors.firstName}
                            </span>
                        )}
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium">Last name</span>
                        <Input
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            className="mt-1"
                            placeholder="Your last name"
                            aria-invalid={!!errors.lastName}
                            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                        />
                        {errors.lastName && (
                            <span id="lastName-error" className="text-sm text-red-600 mt-1">
                                {errors.lastName}
                            </span>
                        )}
                    </label>
                </div>

                <label className="flex flex-col">
                    <span className="text-sm font-medium">Email</span>
                    <Input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="you@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                        <span id="email-error" className="text-sm text-red-600 mt-1">
                            {errors.email}
                        </span>
                    )}
                </label>

                <label className="flex flex-col">
                    <span className="text-sm font-medium">Message</span>
                    <Textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        className="mt-1"
                        placeholder="Write your message"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                        <span id="message-error" className="text-sm text-red-600 mt-1">
                            {errors.message}
                        </span>
                    )}
                </label>

                <div className="flex items-center gap-3">
                    <Button type="submit" disabled={submitting} className="w-full sm:w-auto text-md active:scale-97 hover:scale-102 transition-all duration-300 bg-green-700 hover:bg-green-600 hover:text-white text-white flex items-center rounded-full">
                        {submitting ? 'Sending...' : 'Submit'}
                    </Button>

                    {success && (
                        <span className="text-sm text-green-700">Message sent. Thanks!</span>
                    )}
                </div>
            </form>
        </div>
    )
}

export default ContactForm