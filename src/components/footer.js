import React from 'react'

const Footer = () => {
  return (
    <div class="w-full">
      <footer class="mt-4">
        <div class="flex justify-content-between">
          <div>
            <strong class="text-gray-800 text-xl mb-4">Company Name</strong>
            <br></br>
            <small class="text-gray-500">Description:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
          </div>
          <div class="w-100 text-right mr-0">
            <strong class="text-gray-800 mb-4">Contact Information</strong>
            <br />
            <span class="text-gray-500">Address:</span> 123 Main Street, Anytown, CA 12345
            <br />
            <span class="text-gray-500">Email:</span> info@company.com
            <br />
            <span class="text-gray-500">Phone:</span> (555) 555-5555
          </div>
        </div>
        <p class="text-gray-800 text-center">
          © 2023 Company Name
        </p>
      </footer>
    </div>
  )
}

export default Footer