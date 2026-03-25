import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Separator } from "@/components/ui/separator"

import Hero from '../assets/hero.png'

const Home = () => {
  return (
    <div>
      <div className={`bg-[url(/backdrop.jpeg)] bg-fixed bg-cover h-screen bg-center flex items-center justify-center`}>
        {/* hero section */}
        <h1 className='font-bold text-white text-5xl text-center p-20'>Indian Institute of Technology, Patna</h1>
      </div>

      <Separator />

        {/*About Conference */}
        <div className='flex justify-center flex-col items-center p-10'>
          <h1 className='font-bold font-mono text-4xl mb-5'>About The Conference</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facilis officia deserunt, in, dolorem nulla voluptatibus cum harum, excepturi atque corporis provident modi nobis natus aperiam repudiandae? Quo eos perferendis repudiandae id perspiciatis fugit adipisci numquam quas odit magni in eligendi tenetur vitae sapiente voluptas mollitia, veniam ut fugiat at magnam praesentium dolores a. Enim totam deserunt et porro perferendis, fugiat veritatis nisi, culpa, architecto id placeat officiis minus quasi voluptates sint tempore eaque ipsum debitis quas consequatur deleniti adipisci? At quos architecto ducimus itaque dolorum doloribus est in tempora eaque aperiam? Aspernatur possimus deleniti sit optio nam aliquam tenetur esse! Exercitationem voluptatum sequi eaque optio ex quibusdam delectus? Temporibus ullam incidunt numquam accusamus assumenda iusto sapiente! Ipsam sequi vel id tempore iste inventore labore, illum maxime doloribus! Impedit vero quia tempore quod vel reprehenderit quasi autem, rem doloribus laboriosam ipsam ratione dolorum corrupti voluptas officia repellat voluptates iusto exercitationem blanditiis sint sed voluptatibus nulla quae minima. Dolore quos ipsum similique vitae tempora dolores! Repellat et, est blanditiis ipsa labore tempore iure id, obcaecati commodi eligendi nesciunt incidunt libero. Maiores quo dicta excepturi quod recusandae ipsum autem, culpa perferendis nihil a, odio in adipisci quisquam nostrum dolor deleniti molestias tempora qui magni beatae earum mollitia nulla aperiam. Cupiditate velit obcaecati praesentium eligendi quos nisi autem iure deserunt tenetur perspiciatis earum quidem odit a ratione soluta temporibus mollitia asperiores, blanditiis quisquam explicabo eius! Suscipit, ipsa? Iure temporibus nulla possimus accusamus reprehenderit autem modi sapiente nisi libero recusandae consequuntur natus dolorum quo, a vitae odit. Hic numquam fugiat quis sit debitis quisquam non dolorem officiis maxime, vel accusantium ab, perspiciatis, aperiam vitae incidunt ratione reiciendis saepe minus dicta facere animi? Maxime iste quia eos, necessitatibus corporis est reiciendis nesciunt mollitia labore non aperiam odio. Voluptates tempora quasi, explicabo unde vero voluptatem optio.</p>
        </div>

        <Separator />

        {/*About Institute */}
        <div className='flex justify-center flex-col items-center p-10'>
          <h1 className='font-bold font-mono text-4xl mb-5'>About The Institute</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facilis officia deserunt, in, dolorem nulla voluptatibus cum harum, excepturi atque corporis provident modi nobis natus aperiam repudiandae? Quo eos perferendis repudiandae id perspiciatis fugit adipisci numquam quas odit magni in eligendi tenetur vitae sapiente voluptas mollitia, veniam ut fugiat at magnam praesentium dolores a. Enim totam deserunt et porro perferendis, fugiat veritatis nisi, culpa, architecto id placeat officiis minus quasi voluptates sint tempore eaque ipsum debitis quas consequatur deleniti adipisci? At quos architecto ducimus itaque dolorum doloribus est in tempora eaque aperiam? Aspernatur possimus deleniti sit optio nam aliquam tenetur esse! Exercitationem voluptatum sequi eaque optio ex quibusdam delectus? Temporibus ullam incidunt numquam accusamus assumenda iusto sapiente! Ipsam sequi vel id tempore iste inventore labore, illum maxime doloribus! Impedit vero quia tempore quod vel reprehenderit quasi autem, rem doloribus laboriosam ipsam ratione dolorum corrupti voluptas officia repellat voluptates iusto exercitationem blanditiis sint sed voluptatibus nulla quae minima. Dolore quos ipsum similique vitae tempora dolores! Repellat et, est blanditiis ipsa labore tempore iure id, obcaecati commodi eligendi nesciunt incidunt libero. Maiores quo dicta excepturi quod recusandae ipsum autem, culpa perferendis nihil a, odio in adipisci quisquam nostrum dolor deleniti molestias tempora qui magni beatae earum mollitia nulla aperiam. Cupiditate velit obcaecati praesentium eligendi quos nisi autem iure deserunt tenetur perspiciatis earum quidem odit a ratione soluta temporibus mollitia asperiores, blanditiis quisquam explicabo eius! Suscipit, ipsa? Iure temporibus nulla possimus accusamus reprehenderit autem modi sapiente nisi libero recusandae consequuntur natus dolorum quo, a vitae odit. Hic numquam fugiat quis sit debitis quisquam non dolorem officiis maxime, vel accusantium ab, perspiciatis, aperiam vitae incidunt ratione reiciendis saepe minus dicta facere animi? Maxime iste quia eos, necessitatibus corporis est reiciendis nesciunt mollitia labore non aperiam odio. Voluptates tempora quasi, explicabo unde vero voluptatem optio.</p>
        </div>

        <Separator />


        {/*Sponsor*/}
      <div className='flex justify-center flex-col items-center p-10'>
        <h1 className='font-bold font-mono text-4xl mb-5'>Sponsors</h1>
        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus laudantium ipsam assumenda alias adipisci nesciunt sequi incidunt delectus dolorum autem, eligendi ipsum ex similique beatae.</p>
        <div className='mx-5'>
          <Carousel className="w-full max-w-xl mx-auto">
            <CarouselContent>
              <CarouselItem className="flex justify-center items-center">
                <img
                  src={Hero}
                  className="max-h-100 object-contain"
                />
              </CarouselItem>

              <CarouselItem className="flex justify-center items-center">
                <img
                  src={Hero}
                  className="max-h-100 object-contain"
                />
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <Separator />

      {/*Important Dates */}
        <div className='flex justify-center flex-col items-center p-10'>
          <h1 className='font-bold font-mono text-4xl mb-5'>Important Dates</h1>
          <ul className="list-disc list-inside text-left">
            <li>Registration Opens – April 1, 2026</li>
            <li>Submission Deadline – May 15, 2026</li>
            <li>Review Results – June 10, 2026</li>
            <li>Final Submission – June 25, 2026</li>
            <li>Conference Date – July 10, 2026</li>
          </ul>
        </div>
    </div>
  )
}

export default Home