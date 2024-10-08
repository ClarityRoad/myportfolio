"use client"

import { useState } from 'react'
import { Home,Check, ShoppingCart, Calendar, Users, FileText, Globe, Share2, Mail, MessageCircle, Zap, Brain, Bot, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
export default function Builder() {
  const [step, setStep] = useState(1)
  const [selections, setSelections] = useState({
    siteType: '',
    pack: '',
    modules: [],
    maintenance: ''
  })

  const modules = [
    { name: "E-commerce", icon: ShoppingCart, description: "Vendez vos produits en ligne" },
    { name: "Réservation en Ligne", icon: Calendar, description: "Gérez vos rendez-vous facilement" },
    { name: "Comptes Clients", icon: Users, description: "Offrez une expérience personnalisée" },
    { name: "Blog/Actualités", icon: FileText, description: "Partagez du contenu régulièrement" },
    { name: "Multilingue", icon: Globe, description: "Touchez une audience internationale" },
    { name: "Intégration Réseaux Sociaux", icon: Share2, description: "Connectez-vous à vos réseaux sociaux" },
    { name: "Newsletter", icon: Mail, description: "Permettez à vos utilisateurs de discuter entre eux" },
    { name: "Chat en Ligne", icon: MessageCircle, description: "Offrez un support en temps réel" },
    { name: "Intégration API", icon: Zap, description: "Intégrez des services externes" },
    { name: "Chatbot", icon: Bot, description: "Gardez le contact avec vos clients" },
    { name: "IA", icon: Brain, description: "Intégrez une IA" },
  ]

  const handleSelection = (category, value) => {
    setSelections(prev => ({ ...prev, [category]: value }))
    if (category === 'siteType' && value === 'Vitrine') {
      setStep(2)
    } else if (category === 'pack' && selections.siteType === 'Vitrine') {
      setStep(4)
    } else {
      setStep(prev => prev + 1)
    }
  }

  const toggleModule = (module) => {
    setSelections(prev => ({
      ...prev,
      modules: prev.modules.includes(module)
        ? prev.modules.filter((m) => m !== module)
        : [...prev.modules, module] 
    }))
  }

  const goBack = () => {
    if (step === 2) {
      setStep(1)
    } else if (step === 3) {
      setStep(1)
    } else if (step === 4) {
      if (selections.siteType === 'Vitrine') {
        setStep(2)
      } else {
        setStep(3)
      }
    } else if (step === 5) {
      if (selections.siteType === 'Vitrine') {
        setStep(4)
      } else {
        setStep(3)
      }
    }
  }

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-black">Choisissez le type de site</h2>
            <p className="text-black mb-4">Sélectionnez l&apos;option qui correspond le mieux à vos besoins</p>
            <div className="space-y-4">
              {[
                { type: 'Vitrine', description: 'Parfait pour présenter votre entreprise ou vos services' },
                { type: 'Avancé', description: 'Pour des projets complexes nécessitant des fonctionnalités sur mesure' }
              ].map(({ type, description }) => (
                <button
                  key={type}
                  onClick={() => handleSelection('siteType', type)}
                  className="w-full p-4 border rounded-md hover:bg-blue-50 flex flex-col items-start space-y-2"
                >
                  <span className="font-semibold text-black">{type}</span>
                  <span className="text-sm text-black">{description}</span>
                </button>
              ))}
            </div>
          </div>
        )
      case 2:
         if (selections.siteType === 'Vitrine') {
          return (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2 text-black">Choisissez votre pack Site Vitrine</h2>
              <p className="text-black mb-4">Sélectionnez le pack qui convient à vos besoins</p>
              <div className="space-y-4">
                <button
                  onClick={() => handleSelection('pack', 'Start')}
                  className="w-full p-4 border rounded-md hover:bg-blue-50 text-left"
                >
                  <span className="font-semibold mr-2 text-black">Start</span>
                  <span className="text-black">(499€)</span>
                  <p className="text-sm text-black mt-2">Pack de base pour les petites entreprises, comprenant un design responsive et jusqu&apos;à 5 pages.</p>
                </button>
                <button
                  onClick={() => handleSelection('pack', 'Pro')}
                  className="w-full p-4 border rounded-md hover:bg-blue-50 text-left"
                >
                  <span className="font-semibold mr-2 text-black">Pro</span>
                  <span className="text-black">(799€)</span>
                  <p className="text-sm text-black mt-2">Pack avancé incluant plus de pages, des fonctionnalités supplémentaires et un support premium.</p>
                </button>
              </div>
            </div>
          )
        } else {
          setStep(3)
          return null
        }
      case 3:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-black">Sélectionnez les modules dont vous avez besoin</h2>
            <p className="text-black mb-4">Choisissez les fonctionnalités que vous souhaitez pour votre site</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {modules.map((module) => (
                <button
                  key={module.name}
                  className={`p-4 border rounded-md hover:bg-blue-50 flex flex-col items-start space-y-2 ${
                    selections.modules.includes(module.name) ? 'bg-blue-100 border-blue-500' : ''
                  }`}
                  onClick={() => toggleModule(module.name)}
                >
                  <module.icon className="w-6 h-6 text-blue-500" />
                  <span className="font-semibold text-black">{module.name}</span>
                  <p className="text-sm text-black">{module.description}</p>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(prev => prev + 1)}
              className="mt-6 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Suivant
            </button>
          </div>
        )
        case 4:
          return (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2 text-black">Choisissez votre plan de maintenance</h2>
              <p className="text-black mb-4">Sélectionnez la durée de maintenance qui vous convient. Un bon plan de maintenance garantit la sécurité, la performance et la longévité de votre site.</p>
              <div className="space-y-6">
                {[
                  { 
                    duration: '6 mois', 
                    price: '69€', 
                    description: 'Idéal pour les projets à court terme ou pour tester notre service',
                    features: [
                      'Mises à jour de sécurité',
                      'Sauvegardes hebdomadaires',
                      'Support par email',
                      '2h de modifications par mois'
                    ]
                  },
                  { 
                    duration: '1 an', 
                    price: '59€', 
                    description: 'Recommandé pour la plupart des sites. Offre un bon équilibre entre prix et services',
                    features: [
                      'Tout du plan 6 mois',
                      'Optimisation des performances',
                      'Support prioritaire',
                      '4h de modifications par mois',
                      'Rapport mensuel d\'analyse'
                    ]
                  },
                  { 
                    duration: '2 ans', 
                    price: '49€', 
                    description: 'Meilleur rapport qualité-prix pour un engagement long terme. Idéal pour les entreprises établies',
                    features: [
                      'Tout du plan 1 an',
                      'Audit SEO semestriel',
                      'Support téléphonique',
                      '8h de modifications par mois',
                      'Formation annuelle'
                    ]
                  },
                ].map((plan) => (
                  <div key={plan.duration} className="border rounded-md p-4 hover:bg-blue-50">
                    <button
                      onClick={() => handleSelection('maintenance', plan.duration)}
                      className="w-full text-left"
                    >
                      <span className="font-semibold text-lg text-black">{plan.duration}</span>
                      <span className="text-black ml-2">({plan.price} /mois)</span>
                      <p className="text-sm text-black mt-2">{plan.description}</p>
                      <ul className="mt-3 space-y-1">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-black">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </button>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-black">
                Tous nos plans incluent un engagement sur la durée choisie. Vous bénéficiez de tarifs avantageux et d&apos;un suivi régulier de votre site. Plus la durée est longue, plus le tarif mensuel est avantageux.
              </p>
            </div>
          )
      case 5:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-black">Récapitulatif de votre sélection</h2>
            <p className="text-black mb-4">Vérifiez les détails de votre configuration</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-black">Type de site</h3>
                <p className="text-black">{selections.siteType}</p>
              </div>
              <hr className="border-blue-200" />
              <div>
                <h3 className="font-semibold text-black">Pack</h3>
                <p className="text-black">{selections.pack}</p>
              </div>
              <hr className="border-blue-200" />
              {selections.siteType !== 'Vitrine' && (
                <>
                  <div>
                    <h3 className="font-semibold text-black">Modules</h3>
                <p className="text-black">{selections.modules.join(', ')}</p>
              </div>
             
             
              <hr className="border-blue-200" />
              </>
               )}
              <div>
                <h3 className="font-semibold text-black">Plan de maintenance</h3>
                <p className="text-black">{selections.maintenance}</p>
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
              Demander un devis
            </button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen">
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
          <Home className="h-6 w-6" />
          <span>Accueil</span>
        </Link>
        <h1 className="text-2xl font-bold">Le Builder</h1>
      </div>
    </nav>
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Créez votre site web sur mesure</h1>
      <div className="w-full bg-blue-200 rounded-full h-2.5 mb-8">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(step / 5) * 100}%` }}></div>
      </div>
      {renderStep()}
      {step > 1 && (
        <button onClick={goBack} className="mt-6 flex items-center text-white hover:text-blue-700">
          <ArrowLeft className="mr-2" /> Retour
        </button>
      )}
    </div>
    </div>
  )
}