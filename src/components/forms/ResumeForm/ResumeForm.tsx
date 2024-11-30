"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, ArrowRight, Maximize2 } from 'lucide-react'
import { useResume } from '@/hooks/useResume'

export default function ResumeForm() {
    const { resumeData, updateContact } = useResume()
    const { contact } = resumeData

    const isFieldValid = (field: keyof typeof contact) => {
        return contact[field].length > 0
    }

    const handleInputChange = (field: keyof typeof contact, value: string) => {
        updateContact({ [field]: value })
    }

    return (
        <div className="flex border border-green-600">
            <div className="w-full max-w-2xl mx-auto px-4 py-8">
                {/* Progress Bar */}
                <div className="flex justify-between items-center mb-12 relative">
                    <div className="absolute h-1 bg-gray-200 left-0 right-0 top-1/2 -translate-y-1/2 z-0" />
                    <div className="absolute h-1 bg-blue-500 left-0 right-[83%] top-1/2 -translate-y-1/2 z-0" />
                    {["CONTACT", "EXPERIENCE", "EDUCATION", "SKILLS", "ABOUT", "FINISH IT"].map((step, index) => (
                        <div key={step} className="relative z-10 flex flex-col items-center gap-2">
                            <div className={`w-4 h-4 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-gray-200'}`} />
                            <span className={`text-sm font-medium ${index === 0 ? 'text-blue-500' : 'text-gray-400'}`}>
                                {step}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Form Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Please enter your <span className="text-blue-500">contact</span> info
                    </h1>
                    <p className="text-gray-600">
                        It allows employers to see how they can contact you.
                    </p>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* First Name */}
                    <div className="relative">
                        <Label htmlFor="firstName" className="text-gray-700 mb-1 block">
                            FIRST NAME
                        </Label>
                        <div className="relative">
                            <Input
                                id="firstName"
                                value={contact.firstName}
                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                className="pr-10"
                            />
                            {isFieldValid('firstName') && (
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <div className="bg-emerald-500 rounded-full p-1">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Last Name */}
                    <div className="relative">
                        <Label htmlFor="lastName" className="text-gray-700 mb-1 block">
                            LAST NAME
                        </Label>
                        <div className="relative">
                            <Input
                                id="lastName"
                                value={contact.lastName}
                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                className="pr-10"
                            />
                            {isFieldValid('lastName') && (
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <div className="bg-emerald-500 rounded-full p-1">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* City */}
                    <div className="relative">
                        <Label htmlFor="city" className="text-gray-700 mb-1 block">
                            CITY
                        </Label>
                        <div className="relative">
                            <Input
                                id="city"
                                value={contact.city}
                                onChange={(e) => handleInputChange('city', e.target.value)}
                                className="pr-10"
                            />
                            {isFieldValid('city') && (
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <div className="bg-emerald-500 rounded-full p-1">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Postal Code */}
                    <div className="relative">
                        <Label htmlFor="postalCode" className="text-gray-700 mb-1 block">
                            POSTAL CODE
                        </Label>
                        <div className="relative">
                            <Input
                                id="postalCode"
                                value={contact.postalCode}
                                onChange={(e) => handleInputChange('postalCode', e.target.value)}
                                className="pr-10"
                            />
                            {isFieldValid('postalCode') && (
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <div className="bg-emerald-500 rounded-full p-1">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="relative">
                        <Label htmlFor="phone" className="text-gray-700 mb-1 block">
                            PHONE
                        </Label>
                        <div className="relative">
                            <Input
                                id="phone"
                                type="tel"
                                value={contact.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                className="pr-10"
                            />
                            {isFieldValid('phone') && (
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <div className="bg-emerald-500 rounded-full p-1">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <Label htmlFor="email" className="text-gray-700 mb-1 block">
                            EMAIL
                        </Label>
                        <div className="relative">
                            <Input
                                id="email"
                                type="email"
                                value={contact.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="pr-10"
                            />
                            {isFieldValid('email') && (
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <div className="bg-emerald-500 rounded-full p-1">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Next Button */}
                <div className="flex justify-end">
                    <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2"
                    >
                        Next to Experience
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Preview Section */}
            {/* <div className="w-1/2 h-screen bg-gray-50 p-6 relative">
                <button className="absolute top-4 right-4 p-2 bg-blue-500 text-white rounded-lg">
                    <Maximize2 className="w-5 h-5" />
                </button>

                <div className="max-w-[21cm] mx-auto bg-white shadow-lg p-8 min-h-[29.7cm]">
                    <div className="flex justify-between items-start">
                        <h1 className="text-3xl font-semibold tracking-wide">
                            {contact.firstName} {contact.lastName}
                        </h1>
                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                            {contact.firstName && contact.lastName ?
                                `${contact.firstName[0]}${contact.lastName[0]}` : 'CV'}
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-lg font-medium mb-4">CONTACTS</h2>
                        <div className="space-y-2 text-gray-600">
                            {contact.phone && <p>{contact.phone}</p>}
                            {contact.email && <p>{contact.email}</p>}
                            {contact.city && contact.postalCode && (
                                <p>{contact.city}, {contact.postalCode}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

