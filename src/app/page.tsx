"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Code, DollarSign, Layers } from 'lucide-react'

export default function Home() {
  const [hoverEffect, setHoverEffect] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-8 text-orange-800">Mon Portfolio de Développeur Web</h1>
        <p className="text-xl text-center mb-12 text-orange-700">Créez votre site web sur mesure ou découvrez mes offres</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/pricing">
            <div 
              className={`bg-white p-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${hoverEffect === 'pricing' ? 'ring-4 ring-orange-300' : ''}`}
              onMouseEnter={() => setHoverEffect('pricing')}
              onMouseLeave={() => setHoverEffect('')}
            >
              <DollarSign className="w-16 h-16 mb-4 mx-auto text-orange-500" />
              <h2 className="text-2xl font-semibold text-center mb-4 text-orange-800">Tarification</h2>
              <p className="text-center text-orange-700">Découvrez nos offres et tarifs pour différents types de sites web.</p>
            </div>
          </Link>

          <Link href="/builder">
            <div 
              className={`bg-white p-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${hoverEffect === 'builder' ? 'ring-4 ring-orange-300' : ''}`}
              onMouseEnter={() => setHoverEffect('builder')}
              onMouseLeave={() => setHoverEffect('')}
            >
              <Layers className="w-16 h-16 mb-4 mx-auto text-orange-500" />
              <h2 className="text-2xl font-semibold text-center mb-4 text-orange-800">Constructeur par Étapes</h2>
              <p className="text-center text-orange-700">Créez votre site web sur mesure en suivant un processus guidé étape par étape.</p>
            </div>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-orange-800">À propos de moi</h2>
          <div className="flex items-center justify-center mb-4">
            <Code className="w-8 h-8 mr-2 text-orange-500" />
            <p className="text-xl text-orange-700">Développeur Web Passionné</p>
          </div>
          <p className="max-w-2xl mx-auto text-orange-700">
            Je suis un développeur web expérimenté, spécialisé dans la création de sites web modernes et performants. 
            Que vous ayez besoin d'un site vitrine élégant, d'une plateforme e-commerce robuste ou d'une application web sur mesure, 
            je suis là pour donner vie à votre projet.
          </p>
        </div>
      </main>
    </div>
  )
}
