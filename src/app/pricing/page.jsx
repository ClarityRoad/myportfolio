"use client"
import { useState } from 'react'
import { Check, ShoppingCart, Calendar, Users, FileText, Globe, Share2, Mail, MessageCircle, X, Zap, Brain, Bot } from 'lucide-react'

export default function Pricing() {
  const [selectedModules, setSelectedModules] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPack, setSelectedPack] = useState('')

  const toggleModule = (module) => {
    setSelectedModules(prev =>
      prev.includes(module)
        ? prev.filter(m => m !== module)
        : [...prev, module]
    )
  }

  const openModal = (pack) => {
    setSelectedPack(pack)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPack('')
  }

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

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Mes Offres</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Sites WordPress</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl">
            {[
              { name: 'Refonte', price: 49 },
            ].map((pack) => (
              <div key={pack.name} className="flex flex-col border rounded-lg shadow-sm">
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{`Pack ${pack.name}`}</h3>
                  <p className="font-semibold mt-1">à partir de {pack.price}€</p>
                </div>
                <div className="p-6 flex-grow">
                  <ul className="space-y-2">
                  {pack.name === 'Refonte' && (
  <>
    <p className="text-sm text-gray-600 mb-1">Le prix de base inclut une sélection de ces services. Les services supplémentaires seront facturés en fonction de vos besoins.</p>
    <h4 className="font-semibold mb-2">Services compris :</h4>
    <li className="flex items-center">
      <Check className="mr-2 h-4 w-4 text-green-500" />
      Analyse complète du site actuel
    </li>
    <li className="flex items-center">
      <Check className="mr-2 h-4 w-4 text-green-500" />
      Audit de performance et de SEO
    </li>
    <h4 className="font-semibold mb-2">Services supplémentaires :</h4>
    <li className="flex items-center">
      <Check className="mr-2 h-4 w-4 text-green-500" />
      Mise à jour de WordPress et des plugins
    </li>
    <li className="flex items-center">
      <Check className="mr-2 h-4 w-4 text-green-500" />
      Optimisation de la vitesse de chargement
    </li>
    <li className="flex items-center">
      <Check className="mr-2 h-4 w-4 text-green-500" />
      Amélioration de la structure du site
    </li>
    <li className="flex items-center">
      <Check className="mr-2 h-4 w-4 text-green-500" />
      Responsive design
    </li>
    <li className="flex items-center">
      <Check className="mr-2 h-4 w-4 text-green-500" />
      Intégration de nouvelles fonctionnalités
    </li>
    <li className="flex items-center">
      <Check className="mr-2 h-4 w-4 text-green-500" />
      Refonte visuelle complète
    </li>
    <li className="flex items-center">
      <Check className="mr-2 h-4 w-4 text-green-500" />
      Migration des contenus existants
    </li>
  </>
)}
                  </ul>
                </div>
                <div className="p-6">
                  <button onClick={() => openModal(`WordPress ${pack.name}`)} className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Choisir ce pack</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Sites Vitrine</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: 'Start', price: 499 },
            { name: 'Pro', price: 799 }
          ].map((pack) => (
            <div key={pack.name} className="flex flex-col border rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold">{`Pack ${pack.name}`}</h3>
                <p className="font-semibold mt-2">{pack.price}€</p>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-2">
                  {pack.name === 'Start' ? (
                    <>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Design sur mesure
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Responsive (adapté mobile, tablette, desktop)
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Jusqu&apos;à 5 pages
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Formulaire de contact simple
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Optimisation SEO de base
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Intégration des réseaux sociaux
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        1 mois de maintenance gratuite
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Tout le pack Start +
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Jusqu&apos;à 10 pages
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        SEO avancé
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Formulaire de contact avancé
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Intégration Google Analytics
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        Optimisation des performances
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        3 mois de maintenance gratuite
                      </li>
                    </>
                  )}
                </ul>
              </div>
              <div className="p-6">
                <button onClick={() => openModal(`Vitrine ${pack.name}`)} className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Choisir ce pack</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Site Avancé / Site sur Mesure</h2>
        <div className="border rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 bg-black-50">
            <h3 className="text-xl font-semibold mb-2">Créez votre site web personnalisé</h3>
            <p className="text-gray-600 mb-4">Adaptez votre site à vos besoins spécifiques en sélectionnant les fonctionnalités qui vous conviennent.</p>
          </div>
          <div className="p-6">
            <h4 className="font-semibold mb-4">Sélectionnez les modules dont vous avez besoin :</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {modules.map((module) => (
                <div key={module.name} className="relative group">
                  <div 
                    className={`cursor-pointer transition-all duration-300 transform hover:scale-105 border rounded-lg p-4 flex flex-col items-center justify-center h-full ${
                      selectedModules.includes(module.name) ? 'bg-blue-500 text-white' : ''
                    }`}
                    onClick={() => toggleModule(module.name)}
                  >
                    <module.icon className="w-8 h-8 mb-2" />
                    <h3 className="font-semibold text-center">{module.name}</h3>
                  </div>
                  <div className="absolute z-10 invisible group-hover:visible bg-gray-800 text-white text-sm rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max">
                    {module.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 bg-black-50">
            <div className="flex flex-col items-center">
              <p className="mb-4 text-lg font-semibold">
                Modules sélectionnés : {selectedModules.length}
              </p>
              <button onClick={() => openModal('Sur Mesure')} className="w-full max-w-md bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                Demander un devis personnalisé
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Chaque projet est unique. Nous vous contacterons pour discuter en détail de vos besoins et vous fournir un devis précis.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Packs Préconfigurés</h2>
        <p className="text-center mb-8">Des solutions clé en main pour répondre à vos besoins spécifiques</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: 'E-commerce', 
              price: 1499,
              description: 'Idéal pour lancer votre boutique en ligne',
              modules: [ 'E-commerce', 'Comptes Clients', 'Intégration Paiement']
            },
            { 
              name: 'Réservation', 
              price: 1299,
              description: 'Parfait pour les services nécessitant des rendez-vous',
              modules: [ 'Réservation en Ligne', 'Notifications', 'Calendrier Intégré']
            },
            { 
              name: 'Blog Pro', 
              price: 999,
              description: 'Optimisé pour les créateurs de contenu',
              modules: [ 'Blog/Actualités', 'Newsletter', 'SEO Avancé']
            }
          ].map((pack) => (
            <div key={pack.name} className="flex flex-col border rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 bg-black-50">
                <h3 className="text-xl font-semibold mb-2">Pack {pack.name}</h3>
                <p className="text-gray-600">{pack.description}</p>
                <p className="font-semibold mt-2">{pack.price}€</p>
              </div>
              <div className="p-6 flex-grow">
                <h4 className="font-semibold mb-4">Modules inclus :</h4>
                <ul className="space-y-2">
                  {pack.modules.map((module) => (
                    <li key={module} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      {module}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6">
                <button onClick={() => openModal(`Préconfiguré ${pack.name}`)} className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                  Choisir ce pack
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Abonnements Maintenance et Support</h2>
        <p className="text-center mb-8">Gardez votre site à jour et optimisé avec nos plans de maintenance</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: '6 mois',
              price: 69,
              features: [
                'Mises à jour de sécurité',
                'Sauvegardes hebdomadaires',
                'Support par email',
                '2h de modifications par mois'
              ]
            },
            {
              name: '1 an',
              price: 59,
              features: [
                'Tout du plan 6 mois',
                'Optimisation des performances',
                'Support prioritaire',
                '4h de modifications par mois',
                'Rapport mensuel d\'analyse'
              ]
            },
            {
              name: '2 ans',
              price: 49,
              features: [
                'Tout du plan 1 an',
                'Audit SEO semestriel',
                'Support téléphonique',
                '8h de modifications par mois',
                'Formation annuelle'
              ]
            }
          ].map((plan) => (
            <div key={plan.name} className="flex flex-col border rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 bg-black-50">
                <h3 className="text-xl font-semibold mb-2">Plan {plan.name}</h3>
                <p className="font-semibold mt-2">{plan.price}€ /mois</p>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Tous nos plans d&apos;abonnement incluent un engagement sur la durée choisie. 
            Vous bénéficiez de tarifs avantageux et d&apos;un suivi régulier de votre site.
          </p>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full text-black">
            <div className="flex justify-between items-center mb-4 text-black">
              <h2 className="text-2xl font-bold">Contactez-nous</h2>
              <button onClick={closeModal} className="text-grey-900 hover:text-black">
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="mb-4 text-black">Vous avez choisi le pack : {selectedPack}</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Nom*</label>
                <input type="text" id="name" className="w-full border rounded px-3 py-2" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email*</label>
                <input type="email" id="email" className="w-full border rounded px-3 py-2" required />
              </div>
              <div>
                <label htmlFor="telephone" className="block mb-1">Telephone</label>
                <input type="text" id="telephone" className="w-full border rounded px-3 py-2" ></input>
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message*</label>
                <textarea id="message" rows={4} className="w-full border rounded px-3 py-2" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Envoyer</button>
            </form>
            <p className="text-black">* Champs obligatoires</p>
          </div>
        </div>
      )}
    </div>
  )
}