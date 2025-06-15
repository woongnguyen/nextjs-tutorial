'use client';   
 
export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className='card-wrap'>{children}</div>
  )
}