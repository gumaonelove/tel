
class DTOModel:
    def __init__(self, *args):
        self.id = args[0]  # Assuming ID is the first argument
        # You can access other arguments using args[index]

class GrammarDTO(DTOModel):
    def __init__(self, *args):
        super().__init__(*args)
        self.text = args[1]  # Assuming text is the second argument

class ListeningDTO(DTOModel):
    def __init__(self, *args):
        super().__init__(*args)
        self.word = args[1]  # Assuming word is the second argument

class ReadingDTO(DTOModel):
    def __init__(self, *args):
        super().__init__(*args)
        self.text = args[1]  # Assuming text is the second argument