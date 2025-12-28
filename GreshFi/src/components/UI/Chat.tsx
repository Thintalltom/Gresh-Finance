import React, { useState, useRef, useEffect } from 'react'
import leftIcon from '../../assets/arrow-left.svg'
import { useNavigate } from 'react-router-dom'

interface Message {
  id: number
  text: string
  sender: 'user' | 'support'
  timestamp: Date
}

const Chat = () => {
    const navigate = useNavigate()
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hello! How can I help you today?",
            sender: 'support',
            timestamp: new Date()
        }
    ])
    const [inputMessage, setInputMessage] = useState('')
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const fileMessage: Message = {
                id: messages.length + 1,
                text: `📎 File uploaded: ${file.name}`,
                sender: 'user',
                timestamp: new Date()
            }
            
            setMessages(prev => [...prev, fileMessage])
            
            // Auto response for file upload
            setTimeout(() => {
                const supportResponse: Message = {
                    id: messages.length + 2,
                    text: "Thank you for uploading the file. Our support team will review it and get back to you shortly.",
                    sender: 'support',
                    timestamp: new Date()
                }
                setMessages(prev => [...prev, supportResponse])
            }, 1000)
        }
    }

    const triggerFileUpload = () => {
        fileInputRef.current?.click()
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const getAutoResponse = (userMessage: string): string => {
        const message = userMessage.toLowerCase()
        if (message.includes('balance') || message.includes('money')) {
            return "You can check your balance in the main dashboard or wallets section."
        } else if (message.includes('card') || message.includes('freeze')) {
            return "You can manage your cards, freeze/unfreeze them in the Cards section."
        } else if (message.includes('transaction') || message.includes('payment')) {
            return "All your transactions are available in the Transactions tab with detailed information."
        } else if (message.includes('help') || message.includes('support')) {
            return "I'm here to help! You can ask me about your balance, cards, transactions, or any other banking questions."
        } else {
            return "Thank you for your message. Our support team will get back to you shortly. Is there anything else I can help you with?"
        }
    }

    const sendMessage = () => {
        if (inputMessage.trim()) {
            const userMessage: Message = {
                id: messages.length + 1,
                text: inputMessage,
                sender: 'user',
                timestamp: new Date()
            }
            
            setMessages(prev => [...prev, userMessage])
            
            // Auto response after 1 second
            setTimeout(() => {
                const supportResponse: Message = {
                    id: messages.length + 2,
                    text: getAutoResponse(inputMessage),
                    sender: 'support',
                    timestamp: new Date()
                }
                setMessages(prev => [...prev, supportResponse])
            }, 1000)
            
            setInputMessage('')
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            sendMessage()
        }
    }
    return (
        <div className='h-screen bg-gradient-to-b from-[#0D2F28] to-[#33FFC2] flex flex-col'>
            <div className='grid grid-cols-3 pt-[30px] p-[10px] flex-shrink-0'>
                <button onClick={() => navigate(-1)} className='col-span-1 '>
                    <img src={leftIcon} />
                </button>
                <div className='flex flex-col gap-[5px] w-fit text-center col-span-2 text-white'>
                    <h4>Support</h4>
                    <p>Available 24/7</p>
                </div>
            </div>

            {/* Messages Area */}
            <div className='flex-1 overflow-y-auto p-4 space-y-4'>
                {messages.map((message) => (
                    <div key={message.id} className={`flex items-start gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {message.sender === 'support' && (
                            <div className='w-8 h-8 bg-[#33FFC2] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0'>
                                G
                            </div>
                        )}
                        <div className={`p-3 rounded-lg relative ${
                            message.sender === 'user' 
                                ? 'bg-white text-black rounded-br-none min-w-[276px] max-w-[80%]' 
                                : 'bg-[#33FFC2] text-black rounded-bl-none max-w-[70%]'
                        }`}>
                            {message.sender === 'user' && (
                                <p className='text-[12px] absolute top-1 right-3 text-gray-600'>you</p>
                            )}
                            {message.sender === 'support' && (
                                <p className='text-[10px] text-gray-600 mb-1'>Chat Assistant</p>
                            )}
                            <p className={`text-sm ${message.sender === 'user' ? 'mt-4' : ''}`}>{message.text}</p>
                            <p className='text-xs opacity-70 mt-1'>
                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className='flex-shrink-0 p-4 bg-white/10 backdrop-blur-sm'>
                <div className='relative'>
                    <input
                        type='text'
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder='Type a message...'
                        className='w-full p-3 pr-12 rounded-full border-none outline-none bg-white text-black'
                    />
                    <input
                        type='file'
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        className='hidden'
                        accept='image/*,application/pdf,.doc,.docx,.txt'
                    />
                    <button 
                        onClick={triggerFileUpload}
                        className='absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors'
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.59722 21.9983 8.005 21.9983C6.41278 21.9983 4.88583 21.3658 3.76 20.24C2.63417 19.1142 2.00166 17.5872 2.00166 15.995C2.00166 14.4028 2.63417 12.8758 3.76 11.75L12.33 3.18C13.0806 2.42944 14.0985 2.00551 15.16 2.00551C16.2215 2.00551 17.2394 2.42944 17.99 3.18C18.7406 3.93056 19.1645 4.94849 19.1645 6.01C19.1645 7.07151 18.7406 8.08944 17.99 8.84L9.41 17.41C9.03494 17.7851 8.52556 17.9961 7.995 17.9961C7.46444 17.9961 6.95506 17.7851 6.58 17.41C6.20494 17.0349 5.99389 16.5256 5.99389 15.995C5.99389 15.4644 6.20494 14.9551 6.58 14.58L14.5 6.66" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Chat