import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import InvestView from '@/src/view/invests'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <InvestView />
  )
}
