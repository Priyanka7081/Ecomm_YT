import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Label } from '@/components/ui/label'
import { Input } from "@/components/ui/input" // ✅ add this
import { Button } from '@base-ui/react'

const Profile = () => {
  return (
    <div className='pt-20 min-h-screen bg-gray-100'>
      <Tabs defaultValue="profile" className="max-w-7xl mx-auto items-center">

        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          
          <div>
            <div className='flex flex-col justify-center items-center bg-gray-100'>
                <h1 className='font-bold mb-7 text-2xl text-gray-800'>Update Profile</h1>
                <div className='w-full flex gap-10 justify-between items-start px-7 max-w-2xl'>
                    {/* profile picture */}
                    <div className='flex flex-col items-center'>
                        <img src="/Profile_Pic.jpeg" alt="profile" className='w-32 h-32 rounded-full object-cover border-4 border-pink-800' />
                        <Label className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg">Change Picture
                          <input type="file" accept='image/*'className='hidden' />
                        </Label>
                    </div>
                    {/* profile form */}
                    <form className='space-y-4 shadow-lg p-5 rounded-lg bg-white '>
                      <div className='grid grid-cols-2 gap-4'>
                         <div>
                        <Label className='block text-sm font-medium'>First Name</Label>
                        <input type="text" 
                         placeholder='Enter your firstName..'
                        name='firstName'className='w-full border rounded-lg px-3 py-2 mt-1' />
                      </div>
                        <div>
                        <Label className='block text-sm font-medium'>Last Name</Label>
                        <input type="text" 
                         placeholder='Enter your lastName..'
                        name='lastName'className='w-full border rounded-lg px-3 py-2 mt-1' />
                      </div>
                      </div>
                      <div>
                         <Label className='block text-sm font-medium'>Email</Label>
                        <input type="email" name='email' disabled className='w-full border rounded-lg px-3 py-2 mt-1 cursor-not-allowed bg-gray-100' />
                      </div>
                      <div>
                          <Label className='block text-sm font-medium'>Phone Number</Label>
                        <input type="text" name='phoneNo'
                        placeholder='Enter your Contact No..'
                        className='w-full border rounded-lg px-3 py-2 mt-1 ' />
                      </div>

                        <div>
                          <Label className='block text-sm font-medium'>Address</Label>
                        <input type="text" name='address'
                        placeholder='Enter your Address..'
                        className='w-full border rounded-lg px-3 py-2 mt-1 ' />
                      </div>
                        <div>
                          <Label className='block text-sm font-medium'>City</Label>
                        <input type="text" name='city'
                        placeholder='Enter your City..'
                        className='w-full border rounded-lg px-3 py-2 mt-1 ' />
                      </div>

                        <div>
                          <Label className='block text-sm font-medium'>ZipCode</Label>
                        <input type="number" name='zipcode'
                        placeholder='Enter your ZipCode..'
                        className='w-full border rounded-lg px-3 py-2 mt-1 ' />
                      </div>
                    
                       <Button className="w-full mt-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-800 text-white font-semibold">Update Profile</Button>
                    </form>

                </div>

            </div>
          </div>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Orders</CardTitle>
              <CardDescription>
                Here you can see your orders.
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  )
}

export default Profile