"use client"

import { useState } from 'react'
import { Check, ShoppingCart, Calendar, Users, FileText, Globe, Share2, Mail, MessageCircle, X, Zap, Brain, Bot, ArrowLeft } from 'lucide-react'

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
    if (step === 4 && selections.siteType === 'Vitrine') {
      setStep(2)
    } else {
      setStep(prev => prev - 1)
    }
  }

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-teal-800">Choisissez le type de site</h2>
            <p className="text-teal-600 mb-4">Sélectionnez l'option qui correspond le mieux à vos besoins</p>
            <div className="space-y-4">
              {[
                { type: 'Vitrine', description: 'Parfait pour présenter votre entreprise ou vos services' },
                { type: 'Avancé', description: 'Pour des projets complexes nécessitant des fonctionnalités sur mesure' }
              ].map(({ type, description }) => (
                <button
                  key={type}
                  onClick={() => handleSelection('siteType', type)}
                  className="w-full p-4 border rounded-md hover:bg-teal-50 flex flex-col items-start space-y-2"
                >
                  <span className="font-semibold text-teal-700">{type}</span>
                  <span className="text-sm text-teal-600">{description}</span>
                </button>
              ))}
            </div>
          </div>
        )
      case 2:
         if (selections.siteType === 'Vitrine') {
          return (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2 text-teal-800">Choisissez votre pack Site Vitrine</h2>
              <p className="text-teal-600 mb-4">Sélectionnez le pack qui convient à vos besoins</p>
              <div className="space-y-4">
                <button
                  onClick={() => handleSelection('pack', 'Start')}
                  className="w-full p-4 border rounded-md hover:bg-teal-50 text-left"
                >
                  <span className="font-semibold mr-2 text-teal-700">Start</span>
                  <span className="text-teal-600">(499€)</span>
                  <p className="text-sm text-teal-600 mt-2">Pack de base pour les petites entreprises, comprenant un design responsive et jusqu'à 5 pages.</p>
                </button>
                <button
                  onClick={() => handleSelection('pack', 'Pro')}
                  className="w-full p-4 border rounded-md hover:bg-teal-50 text-left"
                >
                  <span className="font-semibold mr-2 text-teal-700">Pro</span>
                  <span className="text-teal-600">(799€)</span>
                  <p className="text-sm text-teal-600 mt-2">Pack avancé incluant plus de pages, des fonctionnalités supplémentaires et un support premium.</p>
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
            <h2 className="text-2xl font-bold mb-2 text-teal-800">Sélectionnez les modules dont vous avez besoin</h2>
            <p className="text-teal-600 mb-4">Choisissez les fonctionnalités que vous souhaitez pour votre site</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {modules.map((module) => (
                <button
                  key={module.name}
                  className={`p-4 border rounded-md hover:bg-teal-50 flex flex-col items-start space-y-2 ${
                    selections.modules.includes(module.name) ? 'bg-teal-100 border-teal-500' : ''
                  }`}
                  onClick={() => toggleModule(module.name)}
                >
                  <module.icon className="w-6 h-6 text-teal-500" />
                  <span className="font-semibold text-teal-700">{module.name}</span>
                  <p className="text-sm text-teal-600">{module.description}</p>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(prev => prev + 1)}
              className="mt-6 w-full bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600"
            >
              Suivant
            </button>
          </div>
        )
        case 4:
          return (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2 text-teal-800">Choisissez votre plan de maintenance</h2>
              <p className="text-teal-600 mb-4">Sélectionnez la durée de maintenance qui vous convient. Un bon plan de maintenance garantit la sécurité, la performance et la longévité de votre site.</p>
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
                  <div key={plan.duration} className="border rounded-md p-4 hover:bg-teal-50">
                    <button
                      onClick={() => handleSelection('maintenance', plan.duration)}
                      className="w-full text-left"
                    >
                      <span className="font-semibold text-lg text-teal-700">{plan.duration}</span>
                      <span className="text-teal-600 ml-2">({plan.price} /mois)</span>
                      <p className="text-sm text-teal-600 mt-2">{plan.description}</p>
                      <ul className="mt-3 space-y-1">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-teal-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </button>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-teal-600">
                Tous nos plans incluent un engagement sur la durée choisie. Vous bénéficiez de tarifs avantageux et d'un suivi régulier de votre site. Plus la durée est longue, plus le tarif mensuel est avantageux.
              </p>
            </div>
          )
      case 5:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-teal-800">Récapitulatif de votre sélection</h2>
            <p className="text-teal-600 mb-4">Vérifiez les détails de votre configuration</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-teal-700">Type de site</h3>
                <p className="text-teal-600">{selections.siteType}</p>
              </div>
              <hr className="border-teal-200" />
              <div>
                <h3 className="font-semibold text-teal-700">Pack</h3>
                <p className="text-teal-600">{selections.pack}</p>
              </div>
              <hr className="border-teal-200" />
              {selections.siteType !== 'Vitrine' && (
                <>
                  <div>
                    <h3 className="font-semibold text-teal-700">Modules</h3>
                <p className="text-teal-600">{selections.modules.join(', ')}</p>
              </div>
             
             
              <hr className="border-teal-200" />
              </>
               )}
              <div>
                <h3 className="font-semibold text-teal-700">Plan de maintenance</h3>
                <p className="text-teal-600">{selections.maintenance}</p>
              </div>
            </div>
            <button className="w-full mt-6 bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600">
              Demander un devis
            </button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-teal-800">Créez votre site web sur mesure</h1>
      <div className="w-full bg-teal-200 rounded-full h-2.5 mb-8">
        <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: `${(step / 5) * 100}%` }}></div>
      </div>
      {renderStep()}
      {step > 1 && (
        <button onClick={goBack} className="mt-6 flex items-center text-teal-500 hover:text-teal-700">
          <ArrowLeft className="mr-2" /> Retour
        </button>
      )}
    </div>
  )
}