import axios from 'axios'

type Price = {
    amount: number;
    currency: string;
}

interface PaymentResponse {
    id: string;
    order_id: string;
    status: string;
    address: string;
    price: Price;
    pay: Price;
    description: string;
    created_at: Date;
    network?: string | null;
    expiration?: Date | null;
    timeout?: number | null;
}

interface PaymentRequest {
    price: Price;
    pay_currency: string;
    callback_url: string;
    order_id: string;
    description: string;
}

interface PaymentService {
    createPayment(request: PaymentRequest): Promise<PaymentResponse>
    getPayment(id: string): Promise<PaymentResponse>
}

class NowPaymentsService implements PaymentService {
    private apiUrl = "https://api.nowpayments.io/v1/"

    constructor(private apiKey: string) {
        this.apiKey = apiKey

        axios.defaults.headers.common['x-api-key'] = this.apiKey
        axios.defaults.headers.common['Content-Type'] = 'application/json'
    }

    async createPayment(request: PaymentRequest): Promise<PaymentResponse> {
        const data = {
            price_amount: request.price.amount,
            price_currency: request.price.currency || 'USD',
            pay_currency: request.pay_currency || 'BTC',
            order_id: request.order_id,  // database order id
            order_description: request.description,
            ipn_callback_url: request.callback_url
        }

        const response = await axios.post(this.apiUrl + 'payment', data)

        return {
            id: response.data.payment_id,
            order_id: response.data.order_id,
            status: response.data.payment_status,
            address: response.data.pay_address,
            price: {
                amount: response.data.price_amount,
                currency: response.data.price_currency
            } as Price,
            pay: {
                amount: response.data.pay_amount,
                currency: response.data.pay_currency
            } as Price,
            description: response.data.order_description,
            created_at: new Date(response.data.created_at),
            network: response.data.network,
            expiration: new Date(response.data.expiration_estimate_date),
            timeout: response.data.time_limit,
        } as PaymentResponse
    }

    async getPayment(payment_id: string): Promise<PaymentResponse> {
        const response = await axios.get(this.apiUrl + `payment/${payment_id}`)

        return {
            id: response.data.payment_id,
            order_id: response.data.order_id,
            status: response.data.payment_status,
            address: response.data.pay_address,
            price: {
                amount: response.data.price_amount,
                currency: response.data.price_currency
            } as Price,
            pay: {
                amount: response.data.pay_amount,
                currency: response.data.pay_currency
            } as Price,
            description: response.data.order_description,
            created_at: new Date(response.data.created_at),
        } as PaymentResponse
    }
}

const NOWPAYMENTS_API_KEY = process.env.NOWPAYMENTS_API_KEY || ''

if (!NOWPAYMENTS_API_KEY) {
    throw new Error('NOWPAYMENTS_API_KEY is required')
}

const service = new NowPaymentsService(NOWPAYMENTS_API_KEY)

export default service