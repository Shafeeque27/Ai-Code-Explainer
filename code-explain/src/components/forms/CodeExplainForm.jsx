import React, { useActionState } from 'react';
import { explain } from '../../actions';
import CodeExplanation from '../CodeExplanation';
import Error from '../Error';

const CodeExplainForm = () => {
    const [formState, formAction, isPending] = useActionState(explain, null);

    return (
        <div
            className="w-full max-w-4xl p-8 rounded-2xl 
            bg-white/10 backdrop-blur-xl 
            shadow-[0_0_30px_rgba(0,0,0,0.25)] border border-white/10
            text-white">
            <form action={formAction}>
                {/* Label */}
                <label className="block mb-2 font-semibold">Language:</label>

                {/* Select */}
                <select
                    className="border border-white/20 rounded-lg p-2 w-full mb-6 
                    bg-white/5 text-white backdrop-blur-md
                    focus:border-purple-500 focus:ring-2 focus:ring-purple-500
                    transition"
                    name="language">
                    <option className="bg-gray-600" value="javascript">
                        JavaScript
                    </option>
                    <option className="bg-gray-600" value="java">
                        Java
                    </option>
                    <option className="bg-gray-600" value="python">
                        Python
                    </option>
                    <option className="bg-gray-600" value="go">
                        Go
                    </option>
                </select>

                {/* Textarea */}
                <label className="block mb-2 font-semibold">Your Code:</label>

                <textarea
                    name="code"
                    required
                    placeholder="Paste your code here..."
                    className="border border-white/20 rounded-lg w-full p-3 font-mono text-sm 
                    bg-white/5 text-white backdrop-blur-md
                    min-h-[150px]
                    focus:border-purple-500 focus:ring-2 focus:ring-purple-500
                    transition"
                />

                {/* Button */}
                <button
                    type="submit"
                    disabled={isPending}
                    className="mt-6 px-8 py-3 rounded-xl 
                    bg-linear-to-r from-purple-600 to-blue-600 
                    text-white font-semibold shadow-lg
                    hover:scale-[1.03] hover:shadow-xl 
                    transition-all duration-300
                    active:scale-95 cursor-pointer">
                    {isPending ? 'Explaining' : 'Explain Code'}
                </button>
            </form>

            {isPending ? (
                <p className=" bg-white/5">Thinking...</p>
            ) : formState?.success ? (
                <CodeExplanation explanation={formState?.data.explanation} />
            ) : (
                formState?.success === false && <Error error={formState?.error} />
            )}
        </div>
    );
};

export default CodeExplainForm;
