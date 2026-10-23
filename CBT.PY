
import random

questions = [
    {
        "question": "What does CPU stand for?",
        "options": [
            "A. Central Processing Unit",
            "B. Computer Personal Unit",
            "C. Central Program Utility",
            "D. Control Processing User"
        ],
        "answer": "A"
    },
    {
        "question": "Which device is used to enter text into a computer?",
        "options": [
            "A. Monitor",
            "B. Keyboard",
            "C. Speaker",
            "D. Projector"
        ],
        "answer": "B"
    },
    {
        "question": "Which of these is an output device?",
        "options": [
            "A. Mouse",
            "B. Scanner",
            "C. Monitor",
            "D. Keyboard"
        ],
        "answer": "C"
    },
    {
        "question": "What does RAM stand for?",
        "options": [
            "A. Read Access Memory",
            "B. Random Access Memory",
            "C. Run Active Machine",
            "D. Rapid Application Module"
        ],
        "answer": "B"
    },
    {
        "question": "Which component is commonly called the brain of a computer?",
        "options": [
            "A. Hard drive",
            "B. Monitor",
            "C. CPU",
            "D. Keyboard"
        ],
        "answer": "C"
    },
    {
        "question": "Which of these is an operating system?",
        "options": [
            "A. Windows",
            "B. Microsoft Word",
            "C. Google Chrome",
            "D. Adobe Photoshop"
        ],
        "answer": "A"
    },
    {
        "question": "Which device is mainly used to point and click?",
        "options": [
            "A. Printer",
            "B. Mouse",
            "C. Speaker",
            "D. Microphone"
        ],
        "answer": "B"
    },
    {
        "question": "What does ROM stand for?",
        "options": [
            "A. Read Only Memory",
            "B. Random Output Machine",
            "C. Run Only Module",
            "D. Read Open Memory"
        ],
        "answer": "A"
    },
    {
        "question": "Which of these is a storage device?",
        "options": [
            "A. Monitor",
            "B. SSD",
            "C. Keyboard",
            "D. Microphone"
        ],
        "answer": "B"
    },
    {
        "question": "Which software is used to browse websites?",
        "options": [
            "A. Calculator",
            "B. Notepad",
            "C. Web browser",
            "D. File manager"
        ],
        "answer": "C"
    },
    {
        "question": "What does URL stand for?",
        "options": [
            "A. Uniform Resource Locator",
            "B. Universal Reading Link",
            "C. Unified Record Language",
            "D. User Reference Location"
        ],
        "answer": "A"
    },
    {
        "question": "Which of these is an example of application software?",
        "options": [
            "A. Windows kernel",
            "B. Microsoft Excel",
            "C. Device firmware",
            "D. BIOS"
        ],
        "answer": "B"
    },
    {
        "question": "What is the main function of a computer network?",
        "options": [
            "A. To connect devices and share resources",
            "B. To increase monitor brightness",
            "C. To clean the keyboard",
            "D. To replace the CPU"
        ],
        "answer": "A"
    },
    {
        "question": "What does LAN stand for?",
        "options": [
            "A. Large Access Network",
            "B. Local Area Network",
            "C. Linked Application Node",
            "D. Long Area Number"
        ],
        "answer": "B"
    },
    {
        "question": "Which device connects different networks and directs traffic between them?",
        "options": [
            "A. Keyboard",
            "B. Scanner",
            "C. Router",
            "D. Webcam"
        ],
        "answer": "C"
    },
    {
        "question": "Which number system uses only 0 and 1?",
        "options": [
            "A. Decimal",
            "B. Binary",
            "C. Octal",
            "D. Roman"
        ],
        "answer": "B"
    },
    {
        "question": "How many bits make up one byte in the standard modern definition?",
        "options": [
            "A. 2",
            "B. 4",
            "C. 8",
            "D. 16"
        ],
        "answer": "C"
    },
    {
        "question": "Which of these is an example of malware?",
        "options": [
            "A. Spreadsheet",
            "B. Computer virus",
            "C. Web browser",
            "D. Text editor"
        ],
        "answer": "B"
    },
    {
        "question": "What is the purpose of antivirus software?",
        "options": [
            "A. To design websites",
            "B. To detect and help remove malicious software",
            "C. To increase screen size",
            "D. To create computer hardware"
        ],
        "answer": "B"
    },
    {
        "question": "Which key is commonly used to create a space between words?",
        "options": [
            "A. Shift",
            "B. Tab",
            "C. Spacebar",
            "D. Escape"
        ],
        "answer": "C"
    },
    {
        "question": "What does HTML stand for?",
        "options": [
            "A. HyperText Markup Language",
            "B. HighText Machine Language",
            "C. Hyper Transfer Management Link",
            "D. Home Tool Markup Language"
        ],
        "answer": "A"
    },
    {
        "question": "Which programming language are we using to build this CBT?",
        "options": [
            "A. Java",
            "B. Python",
            "C. HTML",
            "D. SQL"
        ],
        "answer": "B"
    },
    {
        "question": "What is cloud computing?",
        "options": [
            "A. Repairing a computer fan",
            "B. Using computing services over a network, often the internet",
            "C. Typing without a keyboard",
            "D. Printing documents wirelessly only"
        ],
        "answer": "B"
    },
    {
        "question": "Which protocol is commonly used to access secure websites?",
        "options": [
            "A. HTTPS",
            "B. FTP only",
            "C. SMTP only",
            "D. USB"
        ],
        "answer": "A"
    },
    {
        "question": "Which component temporarily stores data currently being used by programs?",
        "options": [
            "A. RAM",
            "B. Printer",
            "C. Monitor",
            "D. Power cable"
        ],
        "answer": "A"
    }
]


def start_quiz():
    selected_questions = random.sample(questions, 20)

    score = 0

    for number, item in enumerate(selected_questions, start=1):
        print("\n" + "=" * 45)
        print(f"Question {number} of 20")
        print(item["question"])

        for option in item["options"]:
            print(option)

        answer = input("Your answer (A/B/C/D): ").strip().upper()

        while answer not in ["A", "B", "C", "D"]:
            answer = input(
                "Invalid answer. Enter A, B, C, or D: "
            ).strip().upper()

        if answer == item["answer"]:
            print("Correct!")
            score += 1
        else:
            print(f"Wrong. Correct answer: {item['answer']}")

    print("\n" + "=" * 45)
    print("QUIZ COMPLETED")
    print(f"Your score: {score}/20")
    print(f"Percentage: {score / 20 * 100:.1f}%")

    if score >= 16:
        print("Excellent performance!")
    elif score >= 10:
        print("Good effort. Keep practising!")
    else:
        print("Keep studying and try again!")


while True:
    print("\nCOMPUTER STUDIES CBT")
    print("1. Start Quiz")
    print("2. Exit")

    choice = input("Choose an option: ").strip()

    if choice == "1":
        start_quiz()
    elif choice == "2":
        print("Goodbye!")
        break
    else:
        print("Invalid choice. Try again.")
