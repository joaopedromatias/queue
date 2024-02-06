class CircularQueue { 
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

    enqueue(value: unknown) { 
        if (!this.isFull()) { 
            if (this.isEmpty()) {
                this.front++
                this.rear++
            } else { 
                if (this.rear === this.maxSize - 1) { 
                    this.rear = 0
                } else { 
                    this.rear++
                }
            }
            this.elements[this.rear] = value
        } else { 
            console.log('Queue is full')
        }
    }

    dequeue(){ 
        if (!this.isEmpty()) { 
            this.elements[this.front] = null
            this.front++
            if (this.front === this.rear + 1) { 
                this.front = -1
                this.rear = -1
            } else if (this.front === this.maxSize) { 
                this.front = 0
            } 
        } else { 
            console.log('Queue is empty')
        }
    }

    peek(){ 
        return this.isEmpty() ? null : this.elements[this.front]
    }

    isFull() { 
        return this.rear === this.front - 1 || this.front === 0 && this.rear === this.maxSize - 1
    }

    isEmpty() { 
        return this.rear === -1 
    }
}
