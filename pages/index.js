// pages/index.js
import Head from 'next/head'
import PropertyList from '../components/PropertyList'
import SearchBar from '../components/SearchBar'
import ContactForm from '../components/ContactForm'
import { useState } from 'react'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
    // In a real app, you would filter the properties based on the query.
  }

  return (
    <div className="container">
      <Head>
        <title>Property Connect</title>
        <meta name="description" content="A real estate platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Property Connect</h1>

        <SearchBar onSearch={handleSearch} />
        
        <PropertyList searchQuery={searchQuery} />

        <ContactForm />
      </main>
    </div>
  )
}

