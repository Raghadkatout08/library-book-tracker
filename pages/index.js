'use client';
import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Toast from "../components/Toast";


export default function Page() {
  const [lastBook, setLastBook] = useState(null);

  const handleAddBook = (book) => {
    setLastBook(book);
  };

  const handleCloseToast = () => {
    setLastBook(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <title>Library Book Tracker</title>
      <meta name="description" content="Library Book Tracker App" />
      <Header />
      <main className="flex-grow p-4 pt-16 relative">
        <Form onAddBook={handleAddBook} />
        <div className="pt-10">
          <Toast book={lastBook} onClose={handleCloseToast} />
        </div>
      </main>
      <Footer />
    </div>
  )
}