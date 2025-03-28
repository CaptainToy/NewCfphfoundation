import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const AddUser = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const auth = getAuth();
    const db = getFirestore();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Password Mismatch",
                text: "Passwords do not match. Please try again.",
            });
            return;
        }

        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Store user details in Firestore
            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                createdAt: new Date(),
            });

            Swal.fire({
                icon: "success",
                title: "Registration Successful",
                text: "Your account has been created!",
            }).then(() => navigate("/dashboard"));

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: error.message,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-16">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?auto=format&fit=crop&w=667&q=80')` }}></div>
                
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">CFPHFoundation</h2>
                    <p className="text-xl text-gray-600 text-center">Create an Account</p>

                    <form onSubmit={handleRegister}>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input
                                className="bg-gray-200 text-gray-700 border rounded py-2 px-4 block w-full"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input
                                className="bg-gray-200 text-gray-700 border rounded py-2 px-4 block w-full"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                            <input
                                className="bg-gray-200 text-gray-700 border rounded py-2 px-4 block w-full"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mt-8">
                            <button 
                                type="submit" 
                                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                                disabled={loading}
                            >
                                {loading ? "Registering..." : "Sign Up"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
