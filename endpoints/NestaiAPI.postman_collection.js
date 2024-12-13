{
	"info": {
		"_postman_id": "52280bd9-a0e6-44ce-89ba-476ec49f80e7",
		"name": "NestaiAPI",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "24492606"
	},
	"item": [
		{
			"name": "registerUser",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"email\": \"ferxas321@hotmail.es\",\r\n    \"password\": \"password1234\",\r\n    \"name\": \"Test user\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/auth/register",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"auth",
						"register"
					]
				}
			},
			"response": []
		},
		{
			"name": "login",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"email\": \"ferxas321@hotmail.es\",\r\n    \"password\": \"password1234\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/auth/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"auth",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "userAnalyze",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczMTc1OTM5NSwianRpIjoiMzkyYzg1ODQtODk0NC00M2I2LTliZmEtNzYyOGM3MTRlNDFhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InRlc3R1c2VyQGV4YW1wbGUuY29tIiwibmJmIjoxNzMxNzU5Mzk1LCJjc3JmIjoiNDQ5NTQxYmQtNzMyMC00NDI4LWFiZDgtNTE1Y2IwMzEzYTAwIiwiZXhwIjoxNzMxODQ1Nzk1fQ.oFIlPAF4QqedcXWTptjaMhF5wJ1eeM-5FT5AexoCCQU",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/users/analyze",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"users",
						"analyze"
					]
				}
			},
			"response": []
		},
		{
			"name": "donations",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczMjA1MjI3MSwianRpIjoiNWVkNDNiYTgtY2Y0Mi00MjJmLThiZGEtNzg5YzI5NWU4ODQ5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImZlcnhhczMyMUBob3RtYWlsLmVzIiwibmJmIjoxNzMyMDUyMjcxLCJjc3JmIjoiZTNlMGRjMDAtZDUzMS00ZDVkLWJiNjctZDg1ZWU1ZWE4ZTRiIiwiZXhwIjoxNzMyMTM4NjcxfQ.zV6_IeoPKm9_Ls62ybSUzxNLj2gtToQiYPsFItopz3M",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"email\": \"ferxas321@hotmail.es\",\r\n    \"name\": \"fernando\",\r\n    \"amount\": 50,\r\n    \"date\": \"2024-11-19\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/donations/donate",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"donations",
						"donate"
					]
				}
			},
			"response": []
		},
		{
			"name": "anniversary",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": ""
				}
			},
			"response": []
		},
		{
			"name": "userAnalysis",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczMjMxOTE4MiwianRpIjoiYzRmYTQwN2QtYTgyMy00ZmJkLTk2YzgtNDg1ZWJmOGQ5NTJiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImZlcnhhczMyMUBob3RtYWlsLmVzIiwibmJmIjoxNzMyMzE5MTgyLCJjc3JmIjoiNzVkM2NhYTktZTNlYS00ZDBjLTk4ZmUtMTQyODE3Y2UyYjVjIiwiZXhwIjoxNzMyNDA1NTgyfQ.FtFNOy8MX1yjwL3eMY_P58yCHAK0ixn4PIrOWFRMwaQ",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/users/analysis",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"users",
						"analysis"
					]
				}
			},
			"response": []
		}
	]
}