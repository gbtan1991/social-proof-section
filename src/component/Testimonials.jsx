import React from 'react'


const Testimonials = () => {

    const comments = [
        {
            name: "Colton Smith",
            profile: "Verified Buyer",
            comment: `"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"`,
            avatar: "/image-colton.jpg"
        },
        {
            name: "Irene Roberts",
            profile: "Verified Buyer",
            comment: `"Customer service is always excellent and very quick turn around. Completely
            delighted with the simplicity of the purchase and the speed of delivery."`,
            avatar: "/image-irene.jpg"
        },
        {
            name: "Anne Wallace",
            profile: "Verified Buyer",
            comment: `"Put an order with this company and can only praise them for the very high
            standard. Will definitely use them again and recommend them to everyone!"`,
            avatar: "/image-anne.jpg"
        }
    ]

    

    return (
        
        <div className='flex flex-col gap-3 text-white pb-20 font-theme'>
            {comments.map((comment, index) => (
                <div key={index} className='flex flex-col bg-veryDarkMagenta p-8 text-sm rounded-xl gap-7'>
                     <div className='flex flex-row gap-5 '>
                     <img src={comment.avatar} alt="avatar" className='rounded-full w-10 h-10' />
                    <div>
                    <h3 className='font-bold'>{comment.name}</h3>
                    <h4>{comment.profile}</h4>
                    </div>
                    </div>
                    <p className='before:content-["] after:contents-["]'>{comment.comment }</p>
                  {console.log(comment.avatar)}
                </div>
            ))}

        </div>
        
    )
}
    

export default Testimonials
