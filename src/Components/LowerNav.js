import React from 'react'


const LowerNav = () => {
    return (
        <div className=" p-5 bg-blue-900">
            <div className="Links text-center">
          <a href="/"> <h1 className="text-white hover:text-blue-200 text-2xl m-4 font-bold"> <i class="fas fa-home mr-3"></i>Home</h1></a>
          <a href="/Post"> <h1 className="text-white hover:text-blue-200 text-2xl m-4 font-bold"> <i class="fas fa-book-open mr-3"></i>Posts</h1></a>
          <a href="/Project"> <h1 className="text-white hover:text-blue-200 text-2xl m-4 font-bold"> <i class="fas fa-project-diagram mr-3"></i>Project</h1></a>
            </div>
        </div>
    )
}

export default LowerNav
