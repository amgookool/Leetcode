""" Implementation of Linked Lists using Python
"""


class Node:
    """Class for the node element of the Linked List
    Contains the value we want to store &
    the next connecting Node memory address
    """

    def __init__(self, value, next_node=None):
        self.value = value
        self.next_node = next_node


class LinkedList:
    """Class for the linked List
    Initially set the head to Null (None)
    """

    def __init__(self, head=None):
        """Function for initializing the Linked List

        Args:
            head (Node, optional): The Node (Boxes) of the linked list. Defaults to None.
        """
        self.head = head
        self.size =0

    def insert(self, value):
        """Function to insert a value to the end of linked list

        Args:
            value (any): The value we are storing into a node and placing it at end of list
        """
        # Create a node with the value to put into the linked list
        node = Node(value=value)

        # Check if head is none... add node to list
        if self.head is None:
            self.head = node
            return
        # if head is not none ... iterate over list and add node to end of list (Null value)

        # starting from the head, we need to traverse the list by accessing the next_node property
        current_node = self.head

        while True:
            # if the next node of the current nth node is none... overwrite to new node
            if current_node.next_node is None:
                current_node.next_node = node
                break
            else:
                # set the current node variable to the next node in the linked list
                current_node = current_node.next_node
        self.size = self.get_size()

    def nth_insert(self, value, index):
        """Function to insert a node at the nth position in the list.
        Index starts at 0 which represent the head (first element of the linked list)

        Args:
            value (any): The value we want to store in the linked list node
            index (int): The index position we want to insert the new node at
        """
        node = Node(value)
        iter_idx = 0

        if self.head is None:
            print("The Linked List is empty... use 'insert' method to add first element")
            return
        else:
            current_node = self.head
            while current_node is not None:
                if index == 0:
                    node.next_node = current_node
                    self.head = node
                    break
                iter_idx += 1
                current_node = current_node.next_node
                if iter_idx == index - 1:
                    node.next_node = current_node.next_node
                    current_node.next_node = node
                    break
        self.size = self.get_size()

    def remove_element(self, value):
        """

        Args:
            value (any): The value of the node you want to remove
        """
        current_node, prev_node = self.head, self.head
        iter_idx = 0
        while current_node is not None:
            # Case where we want to remove 1st element of list
            if current_node.value == value and iter_idx == 0:
                self.head = current_node.next_node
                break
            
            iter_idx += 1
            current_node = current_node.next_node
            # Case where we want to remove the last element
            if current_node.next_node is None and current_node.value == value:
                prev_node.next_node = None
                break
            elif current_node.next_node is not None and current_node.value == value:
                prev_node.next_node = current_node.next_node
                break
            else:
                prev_node = current_node


            # Case where we want to remove an element between the first and last element
            

            # if current_node.value == value and current_node.next_node is not None:
            #     prev_node.next_node = None
            #     break
            # else:
            #     prev_node = current_node

    def get_size(self):
        """Function to get the size of the linked list

        Returns:
            void: updates the self.size variable of the linked list class
        """
        tmp = self.head
        count = 0
        while tmp:
            count += 1
            tmp = tmp.next_node
        return count



    def display(self):
        """Function to visualize the linked list on the terminal
        """
        current_node = self.head
        # Iterate over all nodes until we reach the end of list (Null)
        while current_node is not None:
            print(current_node.value, '->', end=" ")
            current_node = current_node.next_node
        print("None")


if __name__ == "__main__":
    ll = LinkedList()
    ll.insert(3)
    ll.insert(4)
    ll.insert(6)
    ll.display()
    print(ll.size)
    ll.nth_insert(500,3)
    ll.display()
    print(ll.size)
    # print(ll.size)
    # ll.insert(100)
    # print(ll.size)
    # ll.display()
    
