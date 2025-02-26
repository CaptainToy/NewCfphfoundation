import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import IMG1 from "../../assets/imglolz.jpg";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [attempts, setAttempts] = useState(0);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (attempts >= 5) {
            Swal.fire({
                icon: "error",
                title: "Too many attempts",
                text: "You have exceeded the maximum login attempts.",
            });
            navigate("/");
            return;
        }

        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "Welcome back!",
            }).then(() => navigate("/dashboard"));
        } catch (error) {
            setAttempts(attempts + 1);
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.message,
            });

            if (attempts + 1 >= 5) {
                Swal.fire({
                    icon: "warning",
                    title: "Too many attempts",
                    text: "Redirecting to home...",
                }).then(() => navigate("/"));
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-16">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div
                    className="hidden lg:block lg:w-1/2 bg-cover"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')` }}
                ></div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">CFPHFoundation</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <span className="text-xs text-center text-gray-500 uppercase">or login with email</span>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                            </div>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <button 
                                type="submit" 
                                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                                disabled={loading}
                            >
                                {loading ? "Checking..." : "Login"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
