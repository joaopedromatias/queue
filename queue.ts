class Queue { 
    private elements: unknown[]
    private maxSize: number
    private front: number
    private rear: number

    constructor(maxSize: number) { 
        this.maxSize = maxSize
        this.elements = []
        this.rear = -1
        this.front = -1
    }

    enqueue(value: unknown){ 
        if (!this.isFull()){ 
            if (this.isEmpty()) this.front++
            this.rear++
            this.elements[this.rear] = value
        } else { 
            console.error('Queue is full')
        }
    }

    dequeue() { 
        if (!this.isEmpty()) { 
            const value = this.elements[this.front]
            this.elements[this.front] = null
            if (this.front === this.rear) {  
                this.front = -1
                this.rear = -1
                this.elements = []
            } else { 
                this.front++
            }
            return value
        } else { 
            console.error('Queue is empty')
        }

    }

    peek() {
        return this.isEmpty() ? null : this.elements[this.front]
    }

    isFull() { 
        return this.rear === this.maxSize - 1
    }

    isEmpty() { 
        return this.rear === -1
    }
}
