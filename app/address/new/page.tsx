"use client";

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AddressPage() {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-white text-gray-900 pb-12">
            {/* Header Simplificado */}
            <header className="border-b border-gray-200 py-4 mb-8">
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-2xl font-semibold">Adicionar um novo endereço</h1>
                </div>
            </header>

            <main className="max-w-xl mx-auto px-4">
                {/* Breadcrumb / Voltar */}
                <button onClick={() => router.back()} className="flex items-center text-sm text-blue-600 hover:text-orange-700 hover:underline mb-6">
                    <ChevronLeft className="w-4 h-4" /> Voltar para seus endereços
                </button>

                <form className="space-y-5">
                    {/* País/Região */}
                    <div>
                        <label className="block text-sm font-bold mb-1">País/Região</label>
                        <select className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none">
                            <option>Brasil</option>
                            <option>Estados Unidos</option>
                            <option>Portugal</option>
                        </select>
                    </div>

                    {/* Nome Completo */}
                    <div>
                        <label className="block text-sm font-bold mb-1">Nome completo (Nome e Sobrenome)</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-400 rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-shadow"
                        />
                    </div>

                    {/* CEP */}
                    <div>
                        <label className="block text-sm font-bold mb-1">CEP</label>
                        <input
                            type="text"
                            placeholder="00000-000"
                            className="w-full md:w-1/2 p-2 border border-gray-400 rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                        />
                    </div>

                    {/* Endereço */}
                    <div>
                        <label className="block text-sm font-bold mb-1">Endereço</label>
                        <input
                            type="text"
                            placeholder="Nome da rua e número"
                            className="w-full p-2 border border-gray-400 rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none mb-2"
                        />
                        <input
                            type="text"
                            placeholder="Apartamento, suíte, unidade, prédio, andar, etc."
                            className="w-full p-2 border border-gray-400 rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                        />
                    </div>

                    {/* Cidade e Estado */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold mb-1">Cidade</label>
                            <input type="text" className="w-full p-2 border border-gray-400 rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Estado / Província / Região</label>
                            <input type="text" className="w-full p-2 border border-gray-400 rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none" />
                        </div>
                    </div>

                    {/* Telefone */}
                    <div>
                        <label className="block text-sm font-bold mb-1">Número de telefone</label>
                        <input type="text" className="w-full p-2 border border-gray-400 rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none" />
                        <p className="text-[11px] text-gray-500 mt-1">Pode ser usado para auxiliar na entrega</p>
                    </div>

                    {/* Checkbox Padrão */}
                    <div className="flex items-center gap-2 pt-2">
                        <input type="checkbox" id="default" className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                        <label htmlFor="default" className="text-sm">Tornar este meu endereço padrão</label>
                    </div>

                    {/* Botão de Envio */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-lg py-2 px-6 text-sm font-medium shadow-sm transition-colors"
                        >
                            Adicionar endereço
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}