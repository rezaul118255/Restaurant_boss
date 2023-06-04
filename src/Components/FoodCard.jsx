import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from "sweetalert2";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useCart from '../Hooks/useCart';


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(AuthContext)
    const [, refetch] = useCart();
    const Navigate = useNavigate()
    const location = useLocation();
    const handelAddToCart = (item) => {
        // console.log(item)

        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Navigate('/login', { state: { from: location } })
                }
            })
        }

    }


    return (
        <div>
            <div className="card w-80 h-[430px]  bg-base-100 shadow-xl ">
                <p className='absolute right-0 bg-slate-900 px-4 mt-3 me-3'>{price}</p>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handelAddToCart(item)} className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 mx-auto bottom-0 absolute">Add To Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodCard;