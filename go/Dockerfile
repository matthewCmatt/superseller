# ─────────────────────────────────────────────
# 1. Build Go binary
# ─────────────────────────────────────────────
FROM golang:1.22 AS builder

WORKDIR /app
COPY . .

RUN go mod download
RUN CGO_ENABLED=0 GOOS=linux go build -o app main.go

# ─────────────────────────────────────────────
# 2. Final runtime image
# ─────────────────────────────────────────────
FROM alpine:3.19

WORKDIR /app

# Copy the Go binary
COPY --from=builder /app/app .

EXPOSE 8080
CMD ["./app serve"]
